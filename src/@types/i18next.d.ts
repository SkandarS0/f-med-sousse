// import the original type declarations
import "i18next";
// import all namespaces (for the default language, only)
import type messages from "@/shared/i18n/fr/messages.json";
import type models from "@/shared/i18n/fr/models.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "messages";
    resources: {
      messages: typeof messages;
      models: typeof models;
    };
  }
}
