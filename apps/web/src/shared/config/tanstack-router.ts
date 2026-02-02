import { createRouter } from "@tanstack/react-router";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
import { useAuth } from "@/features/auth/lib/use-auth.ts";
import { queryClient } from "@/shared/api/query-client.ts";
import { routeTree } from "@/shared/routes/routeTree.gen.ts";

export function useRouterInstance() {
  const auth = useAuth();
  const router = createRouter({
    routeTree,
    context: { queryClient, auth },
    scrollRestoration: true,
    rewrite: {
      input: ({ url }) => {
        if (url.pathname === "/") {
          url.pathname = "/login";
        }
        return url;
      },
    },
  });

  setupRouterSsrQueryIntegration({
    router,
    queryClient,
    wrapQueryClient: false,
  });

  return router;
}
