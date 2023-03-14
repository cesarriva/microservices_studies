import express, { Request, Response } from "express";
import { body } from "express-validator";
import { User } from "../models/user";
import { PasswordManager } from "../services/password";
import jwt from "jsonwebtoken";
import { BadRequestError, validateRequest } from "@crticketing/shared";

const router = express.Router();

router.post(
  "/api/users/signin",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password").trim().notEmpty().withMessage("Password is required"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      throw new BadRequestError("Invalid credentials");
    }

    const isPasswordsMatching = await PasswordManager.compare(
      user.password,
      password
    );

    if (!isPasswordsMatching) {
      throw new BadRequestError("Invalid credentials");
    }

    const userJwt = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_KEY!
    );
    req.session = { jwt: userJwt };

    res.status(200).send(user);
  }
);

export { router as signinRouter };
