import { RouterProvider } from "@tanstack/react-router";
import { useRouterInstance } from "@/shared/config/tanstack-router";

export function AppRouterProvider() {
  const router = useRouterInstance();
  return <RouterProvider router={router} />;
}
