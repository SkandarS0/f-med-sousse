import { createFileRoute } from "@tanstack/react-router";
import * as z from "zod/mini";
import { LoginPage } from "@/pages/login/ui/page.tsx";
import { useRouteTitle } from "@/shared/routes/title.ts";

export const Route = createFileRoute("/(guest)/login")({
  validateSearch: z.object({
    redirectTo: z.optional(z.string()),
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
