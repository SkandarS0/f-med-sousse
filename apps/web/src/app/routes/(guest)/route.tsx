import { createFileRoute, redirect } from "@tanstack/react-router";
import { UserType } from "@/entities/user/api/dto.ts";
import { GuestLayout } from "@/shared/ui/layouts/guest.tsx";

export const Route = createFileRoute("/(guest)")({
  beforeLoad: async ({ context }) => {
    if (context.auth.isAuthenticated) {
      throw redirect({
        to: context.auth.userTypeOf(UserType.ADMIN) ? "/admin" : "/student",
      });
    }
  },
  component: GuestLayout,
});
