// import the original type declarations
import "i18next";
// import all namespaces (for the default language, only)
import type { resources } from "@/shared/i18n/i18next.ts";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "messages";
    resources: (typeof resources)["fr"];
  }
}
