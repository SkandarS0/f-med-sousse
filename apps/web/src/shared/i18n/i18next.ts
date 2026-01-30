import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { zodConfig } from "@/shared/config/zod.ts";
import enMessages from "@/shared/i18n/en/messages.ts";
import enModels from "@/shared/i18n/en/models.ts";
import enPages from "@/shared/i18n/en/pages.ts";
import enRoutes from "@/shared/i18n/en/routes.ts";
import enSharedUi from "@/shared/i18n/en/shared_ui.ts";
import enValidation from "@/shared/i18n/en/validation.ts";
import frMessages from "@/shared/i18n/fr/messages.ts";
import frModels from "@/shared/i18n/fr/models.ts";
import frPages from "@/shared/i18n/fr/pages.ts";
import frRoutes from "@/shared/i18n/fr/routes.ts";
import frSharedUi from "@/shared/i18n/fr/shared_ui.ts";
import frValidation from "@/shared/i18n/fr/validation.ts";

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

export const supportedLngs = ["fr", "en"] as const;

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
