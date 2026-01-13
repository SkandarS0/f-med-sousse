import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enMessages from "./en/messages";
import frMessages from "./fr/messages";

export const defaultNS = "messages";
export const resources = {
  fr: {
    messages: frMessages,
  },
  en: {
    messages: enMessages,
  },
} as const;
export const i18nextInstance = i18next
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .createInstance({
    debug: import.meta.env.DEV,
    detection: {
      order: ["localStorage", "cookie", "navigator"],
      // caches: ["localStorage", "cookie"],
      lookupCookie: "i18next",
      cookieOptions: {
        // should be sent whenever we make a request from the client to the server
        // to inform the server about the current locale
        sameSite: "lax",
        secure: import.meta.env.PROD,
      },
    },
    fallbackLng: "fr",
    supportedLngs: ["fr", "en"],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
    defaultNS: "messages",
    resources,
  });

i18nextInstance.init();
