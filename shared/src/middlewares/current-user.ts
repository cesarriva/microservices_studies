import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface CurrentUser {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: CurrentUser;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { jwt: token } = req.session ?? {};

  if (!token) {
    return next();
  }

  try {
    const userPayload = jwt.verify(token, process.env.JWT_KEY!);
    req.currentUser = userPayload as CurrentUser;
  } catch (error) {}

  next();
};
