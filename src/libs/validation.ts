import { z } from "zod";

const emailSchema = z
  .string()
  .min(1, "Email is required")
  .email("Invalid email");

const passwordSchema = z
  .string()
  .min(6, "Password must be at least 6 characters");

const userNameSchema = z.string().min(1, "Username is required");

export { emailSchema, passwordSchema, userNameSchema };
