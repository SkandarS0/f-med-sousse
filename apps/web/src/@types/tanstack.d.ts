import type { ApiErrorResponse } from "@/shared/api/axios";
import type { routerInstance } from "@/shared/config/tanstack-router";

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof routerInstance>;
  }
}

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: ApiErrorResponse;
  }
}
