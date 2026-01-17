import { RouterProvider } from "@tanstack/react-router";
import { routerInstance } from "@/shared/config/tanstack-router";

const router = routerInstance();

export function AppRouterProvider() {
  return <RouterProvider router={router} />;
}
