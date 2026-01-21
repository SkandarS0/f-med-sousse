import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(portal)/student")({
  beforeLoad: async ({ context }) => {
    if (context.auth.isAuthenticated && context.auth.user?.type !== "student") {
      throw redirect({ to: "/unauthorized" });
    }
  },
});
