import { I18nextProvider } from "react-i18next";
import { i18nextInstance } from "@/shared/i18n/i18next";

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  return (
    <I18nextProvider i18n={i18nextInstance}>
      {/** Children components will go here **/}
      {children}
    </I18nextProvider>
  );
}
