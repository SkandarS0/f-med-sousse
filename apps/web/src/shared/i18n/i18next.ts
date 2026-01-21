import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { zodConfig } from "../config/zod";
import enMessages from "./en/messages";
import enModels from "./en/models";
import enPages from "./en/pages";
import enRoutes from "./en/routes";
import enSharedUi from "./en/shared_ui";
import enValidation from "./en/validation";
import frMessages from "./fr/messages";
import frModels from "./fr/models";
import frPages from "./fr/pages";
import frRoutes from "./fr/routes";
import frSharedUi from "./fr/shared_ui";
import frValidation from "./fr/validation";

export const defaultNS = "messages";
export const resources = {
  fr: {
    messages: frMessages,
    shared_ui: frSharedUi,
    validation: frValidation,
    routes: frRoutes,
    models: frModels,
    pages: frPages,
  },
  en: {
    messages: enMessages,
    shared_ui: enSharedUi,
    validation: enValidation,
    routes: enRoutes,
    models: enModels,
    pages: enPages,
  },
} as const;

const supportedLngs = ["fr", "en"] as const;

export type SupportedLng = (typeof supportedLngs)[number];

export const i18nextInstance = i18next
  .createInstance({
    debug: import.meta.env.DEV,
    detection: {
      order: ["cookie", "localStorage", "navigator"],
      caches: ["cookie", "localStorage"],
      cookieOptions: {
        // should be sent whenever we make a request from the client to the server
        // to inform the server about the current locale
        sameSite: "lax",
        secure: import.meta.env.PROD,
      },
    },
    fallbackLng: "fr",
    supportedLngs: supportedLngs,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
    defaultNS: "messages",
    resources,
  })
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next);

i18nextInstance.on("languageChanged", () => {
  zodConfig(i18nextInstance);
});

i18nextInstance.init();
