import request from "supertest";
import { app } from "../app";

export const signupTest = async (email: string) => {
  const password = "password";

  const response = await request(app)
    .post("/api/users/signup")
    .send({ email, password })
    .expect(201);

  const cookie = response.get("Set-Cookie");

  return cookie;
};
