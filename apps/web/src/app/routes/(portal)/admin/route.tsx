import { createFileRoute, redirect } from "@tanstack/react-router";
import { UserType } from "@/entities/user/api/dto";

export const Route = createFileRoute("/(portal)/admin")({
  beforeLoad: async ({ context }) => {
    if (!context.auth.userTypeOf(UserType.ADMIN)) {
      throw redirect({ to: "/unauthorized" });
    }
  },
});
