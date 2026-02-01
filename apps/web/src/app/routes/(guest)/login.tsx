import { createFileRoute } from "@tanstack/react-router";
import * as z from "zod/mini";
import { LoginPage } from "@/pages/login/ui/page.tsx";

export const Route = createFileRoute("/(guest)/login")({
  validateSearch: z.object({
    redirectTo: z.optional(z.string()),
  }),
  component: LoginPage,
});
