import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "vi"],

  // Used when no locale matches
  defaultLocale: "en",
  localePrefix: "never",
  pathnames: {
    "/blog": {
      vi: "/leistungen",
    },
    "sign-in": {
      vi: "dang-nhap",
    },
    "sign-up": {
      vi: "dang-ky",
    },
    "/": {
      vi: "/",
    },
    "forgot-password": {
      vi: "quen-mat-khau",
    },
    "passwprd-reset/[tokenId]": {
      vi: "dat-lai-mat-khau",
    },
  },
});
