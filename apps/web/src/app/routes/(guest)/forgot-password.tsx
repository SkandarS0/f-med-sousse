import { createFileRoute } from "@tanstack/react-router";
import * as z from "zod/mini";
import { ForgotPasswordPage } from "@/pages/forgot-password/ui/page";
import { useRouteTitle } from "@/shared/routes/title";

export const Route = createFileRoute("/(guest)/forgot-password")({
  component: function RouteComponent() {
    const title = useRouteTitle("/forgot-password");
    return (
      <>
        <title>{title}</title>
        <ForgotPasswordPage />
      </>
    );
  },
  validateSearch: z.object({
    email: z.optional(z.email()),
  }),
});
