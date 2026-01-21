import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { appConfig } from "../config";
import type { FileRoutesByTo } from "./routeTree.gen";

type Routes = keyof FileRoutesByTo;

function useRouteTitle(routeName: Routes) {
  const { t } = useTranslation("routes");
  const title = useMemo(() => {
    return `${t(`${routeName}.title`)} | ${appConfig.name}`;
  }, [routeName, t]);
  return title;
}

export { useRouteTitle };
