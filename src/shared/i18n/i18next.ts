import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enMessages from "./en/messages";
import enSharedUi from "./en/shared_ui";
import enValidation from "./en/validation";
import frMessages from "./fr/messages";
import frSharedUi from "./fr/shared_ui";
import frValidation from "./fr/validation";

export const defaultNS = "messages";
export const resources = {
  fr: {
    messages: frMessages,
    shared_ui: frSharedUi,
    validation: frValidation,
  },
  en: {
    messages: enMessages,
    shared_ui: enSharedUi,
    validation: enValidation,
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
