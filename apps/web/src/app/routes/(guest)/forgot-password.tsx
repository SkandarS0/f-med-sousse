import { createFileRoute } from "@tanstack/react-router";
import * as z from "zod/mini";
import { ForgotPasswordPage } from "@/pages/forgot-password/ui/page.tsx";

export const Route = createFileRoute("/(guest)/forgot-password")({
  component: ForgotPasswordPage,
  validateSearch: z.object({
    email: z.optional(z.email()),
  }),
});
