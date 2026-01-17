import { createRouter } from "@tanstack/react-router";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
import { queryClient } from "@/shared/api/query-client.ts";
import { routeTree } from "@/shared/routes/routeTree.gen.ts";

export function routerInstance() {
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreload: "intent",
  });

  setupRouterSsrQueryIntegration({
    router,
    queryClient,
  });

  return router;
}
