import { createFileRoute, redirect } from "@tanstack/react-router";
import { GuestLayout } from "@/shared/ui/layouts/guest";

export const Route = createFileRoute("/(guest)")({
  beforeLoad: async ({ context }) => {
    if (context.auth.isAuthenticated) {
      throw redirect({
        to: context.auth.userTypeOf("admin") ? "/admin" : "/student",
      });
    }
  },
  component: GuestLayout,
});
