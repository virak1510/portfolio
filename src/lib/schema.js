import { z } from "zod";
export const loginSchema = z.object({
  username: z.string(),
  password: z.string({required_error: "password is required"}).min(8, {message: "password at least 8 characters"}),
});
