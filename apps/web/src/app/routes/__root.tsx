import type { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  useLocation,
} from "@tanstack/react-router";
import { TanstackDevToolsIntegration } from "@/app/ui/tanstack-devtools.tsx";
import type { AuthContextType } from "@/features/auth/lib/auth-context.ts";
import { useRouteTitle } from "@/shared/routes/title.ts";

interface AppRouterContext {
  queryClient: QueryClient;
  auth: AuthContextType;
}

export const Route = createRootRouteWithContext<AppRouterContext>()({
  component: function RootComponent() {
    const { pathname } = useLocation();
    const title = useRouteTitle(pathname);
    return (
      <>
        <HeadContent />
        <title>{title}</title>
        <Outlet />
        <TanstackDevToolsIntegration />
      </>
    );
  },
});
