import type { ApiErrorResponse } from "@/shared/api/axios.ts";
import type { useRouterInstance } from "@/shared/config/tanstack-router.ts";

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof useRouterInstance>;
  }
}

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: ApiErrorResponse;
  }
}
