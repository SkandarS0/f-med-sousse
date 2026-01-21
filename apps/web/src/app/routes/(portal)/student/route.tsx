import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(portal)/student")({
  beforeLoad: async ({ context }) => {
    if (!context.auth.userTypeOf("student")) {
      throw redirect({ to: "/unauthorized" });
    }
  },
});
