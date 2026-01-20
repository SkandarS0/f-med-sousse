import { createFileRoute, redirect } from "@tanstack/react-router";
import z from "zod";
import { getUserQueryOptions } from "@/features/auth/api/get-user";
import { LoginPage } from "@/pages/login";
import { useRouteTitle } from "@/shared/routes/title";

export const Route = createFileRoute("/(auth)/login")({
  beforeLoad: async ({ context, search }) => {
    const user = await context.queryClient
      .ensureQueryData(getUserQueryOptions)
      // If the user is not logged in, suppress the error
      .catch(() => null);
    if (user) {
      throw redirect({ to: search.redirectTo || "/portal" });
    }
  },
  validateSearch: z.object({
    redirectTo: z.string().optional(),
  }),
  component: function RouteComponent() {
    const title = useRouteTitle("/login");
    return (
      <>
        <title>{title}</title>
        <LoginPage />
      </>
    );
  },
});
