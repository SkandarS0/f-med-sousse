import { useQuery } from "@tanstack/react-query";
import type * as React from "react";
import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import { userQueries } from "@/entities/user/api/query.ts";
import { i18nextInstance } from "@/shared/i18n/i18next.ts";

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const { data: user } = useQuery(userQueries.xGet());
  useEffect(() => {
    if (user?.locale) {
      i18nextInstance.changeLanguage(user.locale);
    }
  }, [user?.locale]);
  return <I18nextProvider i18n={i18nextInstance}>{children}</I18nextProvider>;
}
