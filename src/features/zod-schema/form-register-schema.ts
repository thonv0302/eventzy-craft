import { emailSchema, passwordSchema, userNameSchema } from "@/libs/validation";
import z from "zod";

const formSignUpSchema = z.object({
  fullName: userNameSchema,
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: passwordSchema,
});

const defaultSignUpValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export { formSignUpSchema, defaultSignUpValues };
