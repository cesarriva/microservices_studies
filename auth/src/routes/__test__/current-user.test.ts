import request from "supertest";
import { app } from "../../app";
import { signupTest } from "../../test/auth-test-helper";

it("responds with current user details", async () => {
  const expectedEmail = "test@test.com";
  const cookie = await signupTest(expectedEmail);

  const response = await request(app)
    .get("/api/users/currentuser")
    .set("Cookie", cookie)
    .send()
    .expect(200);

  expect(response.body.currentUser.email).toBe(expectedEmail);
});

it("responds with null if not authenticated", async () => {
  const response = await request(app)
    .get("/api/users/currentuser")
    .send()
    .expect(200);

  expect(response.body.currentUser).toBeNull();
});
