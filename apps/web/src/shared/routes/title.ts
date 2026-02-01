import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { appConfig } from "@/shared/config/app.ts";
import type { FileRoutesByTo } from "@/shared/routes/routeTree.gen.ts";

type Routes = keyof FileRoutesByTo;

function useRouteTitle(routeName: string) {
  const routeNameTyped = routeName as Routes;
  const { t } = useTranslation("routes");
  return useMemo(() => {
    return `${t(`${routeNameTyped}.title`)} | ${appConfig.name}`;
  }, [routeNameTyped, t]);
}

export { useRouteTitle };
