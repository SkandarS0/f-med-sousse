import { createFileRoute, redirect } from "@tanstack/react-router";
import z from "zod";
import { LoginPage } from "@/pages/login";
import { useRouteTitle } from "@/shared/routes/title";

export const Route = createFileRoute("/(guest)/login")({
  validateSearch: z.object({
    redirectTo: z.string().optional(),
  }),
  beforeLoad: async ({ context, search }) => {
    if (context.auth.isAuthenticated) {
      throw redirect({
        throw: false,
        to:
          search.redirectTo ||
          (context.auth.userTypeOf("admin") ? "/admin" : "/student"),
      });
    }
  },
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
