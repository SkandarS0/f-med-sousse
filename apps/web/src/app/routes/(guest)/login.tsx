import { createFileRoute } from "@tanstack/react-router";
import z from "zod";
import { LoginPage } from "@/pages/login/ui/page";
import { useRouteTitle } from "@/shared/routes/title";

export const Route = createFileRoute("/(guest)/login")({
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
