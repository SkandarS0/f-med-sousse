import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { ForgotPasswordPage } from "@/pages";
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
    email: z.email().optional(),
  }),
});
