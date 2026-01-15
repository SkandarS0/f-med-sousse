import { getI18n } from "react-i18next";
import { appConfig } from "../config";
import type { FileRoutesByTo } from "./routeTree.gen";

type Routes = keyof FileRoutesByTo;

function getRouteTitle(routeName: Routes) {
  return titleJoiner(getI18n().t(`${routeName}.title`, { ns: "routes" }));
}

function titleJoiner(title: string) {
  return [title, appConfig.name].join(" | ");
}

export { getRouteTitle };
