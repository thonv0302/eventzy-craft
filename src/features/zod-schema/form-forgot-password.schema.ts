import { emailSchema } from "@/libs/validation";
import z from "zod";

const formForgotPasswordSchema = z.object({
  email: emailSchema,
});

const defaultForgotPasswordValues = {
  email: "",
};

export { formForgotPasswordSchema, defaultForgotPasswordValues };
