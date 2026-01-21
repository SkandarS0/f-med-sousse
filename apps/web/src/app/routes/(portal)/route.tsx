import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(portal)")({
  beforeLoad: async ({ context, location }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({ to: "/login", search: { redirectTo: location.href } });
    }
  },
});
