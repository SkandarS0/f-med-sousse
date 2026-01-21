import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(portal)/admin")({
  beforeLoad: async ({ context }) => {
    if (!context.auth.userTypeOf("admin")) {
      throw redirect({ to: "/unauthorized" });
    }
  },
});
