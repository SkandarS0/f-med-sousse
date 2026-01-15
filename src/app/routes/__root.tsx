import type { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
} from "@tanstack/react-router";
import { TanstackDevToolsIntegration } from "@/app/ui/tanstack-devtools";

interface AppRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<AppRouterContext>()({
  component: () => (
    <>
      <HeadContent />
      <Outlet />
      <TanstackDevToolsIntegration />
    </>
  ),
});
