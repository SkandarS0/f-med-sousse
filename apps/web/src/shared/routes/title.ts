import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { appConfig } from "../config";
import type { FileRoutesByTo } from "./routeTree.gen";

type Routes = keyof FileRoutesByTo;

function useRouteTitle(routeName: Routes) {
  const { t, i18n } = useTranslation("routes");
  const title = useMemo(() => {
    return t(`${routeName}.title`) + ` | ${appConfig.name}`;
  }, [routeName, t, i18n.language]);
  return title;
}

export { useRouteTitle };
