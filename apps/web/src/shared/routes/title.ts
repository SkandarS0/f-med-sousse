import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { appConfig } from "@/shared/config/app.ts";
import type { FileRoutesByTo } from "@/shared/routes/routeTree.gen.ts";

type Routes = keyof FileRoutesByTo;

function useRouteTitle(routeName: Routes) {
  const { t } = useTranslation("routes");
  return useMemo(() => {
    return `${t(`${routeName}.title`)} | ${appConfig.name}`;
  }, [routeName, t]);
}

export { useRouteTitle };
