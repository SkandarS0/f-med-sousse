import { createFileRoute, redirect } from "@tanstack/react-router";
import { UserType } from "@/entities/user/api/dto";

export const Route = createFileRoute("/(portal)/student")({
  beforeLoad: async ({ context }) => {
    if (!context.auth.userTypeOf(UserType.STUDENT)) {
      throw redirect({ to: "/unauthorized" });
    }
  },
});
