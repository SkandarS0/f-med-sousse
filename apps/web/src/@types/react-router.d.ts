import type { routerInstance } from "@/shared/config/tanstack-router";

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof routerInstance>;
  }
}
