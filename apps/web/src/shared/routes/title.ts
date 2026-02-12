import { useRouterState } from "@tanstack/react-router";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { appConfig } from "@/shared/config/app.ts";

function useRouteTitle() {
  const { t } = useTranslation("routes");
  const matches = useRouterState({
    select: (s) => s.matches,
  });
  const currentMatch = matches[matches.length - 1];
  const prefix = useMemo(() => {
    switch (currentMatch.fullPath) {
      case "/login":
        return t("login.title");
      case "/forgot-password":
        return t("forgot-password.title");
      case "/reset-password":
        return t("reset-password.title");
      case "/unauthorized":
        return t("unauthorized.title");
      case "/portal":
        return t("portal.title");
      case "/admin/":
        return t("admin.title");
      case "/admin/classes/":
        return t("admin.classes.title");
      case "/admin/classes/$slug":
        return t("admin.classes.$slug.title", {
          slug: currentMatch.params.slug.toUpperCase().replace("-", " "),
        });
      case "/student/":
        return t("student.title");
      default:
        return "???????";
    }
  }, [t, currentMatch]);
  const suffix = appConfig.name;
  return `${prefix} | ${suffix}`;
}

export { useRouteTitle };
