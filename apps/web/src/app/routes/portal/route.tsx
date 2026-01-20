import { createFileRoute, redirect } from "@tanstack/react-router";
import { getUserQueryOptions } from "@/features/auth/api/get-user";

export const Route = createFileRoute("/portal")({
  beforeLoad: async ({ context, location }) => {
    await context.queryClient.ensureQueryData(getUserQueryOptions).catch(() => {
      throw redirect({ to: "/login", search: { redirectTo: location.href } });
    });
  },
  loader: async ({ context }) => ({
    user: await context.queryClient.ensureQueryData(getUserQueryOptions),
  }),
});
