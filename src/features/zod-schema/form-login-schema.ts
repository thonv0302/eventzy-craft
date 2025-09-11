import { emailSchema, passwordSchema } from "@/libs/validation";
import z from "zod";

const formLoginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

const defaultLoginValues = {
  email: "",
  password: "",
};

export { formLoginSchema, defaultLoginValues };
