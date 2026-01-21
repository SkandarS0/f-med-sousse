import type { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
} from "@tanstack/react-router";
import { TanstackDevToolsIntegration } from "@/app/ui/tanstack-devtools";
import type { AuthContextType } from "@/entities/user/lib/auth-context";

interface AppRouterContext {
  queryClient: QueryClient;
  auth: AuthContextType;
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
