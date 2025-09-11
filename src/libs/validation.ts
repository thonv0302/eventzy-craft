// lib/validation.ts
import { useTranslations } from "next-intl";

export const getValidationRules = () => {
  const t = useTranslations("validation");
  return {
    email: {
      required: t("emailRequired"),
      // pattern: {
      //   value: /^\S+@\S+$/i,
      //   message: t("invalidEmail"),
      // },
      validate: (value: any) => {
        console.log('vao day', value);
        return value.endsWith("@example.com") || "Email must end with @example.com"
      }
    },
    password: {
      required: t("passwordRequired"),
      minLength: {
        value: 6,
        message: t("passwordMin"),
      },
    },
  };
};
