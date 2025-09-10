// lib/validation.ts
import { useTranslations } from "next-intl";

export const getValidationRules = () => {
  const t = useTranslations("validation");
  return {
    email: {
      required: t("emailRequired"),
      pattern: {
        value: /^\S+@\S+$/i,
        message: t("invalidEmail"),
      },
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
