import { createFileRoute } from "@tanstack/react-router";
import z from "zod";
import { LoginPage } from "@/pages/auth/login";

export const Route = createFileRoute("/(auth)/login")({
  validateSearch: z.object({
    redirectTo: z.string().optional(),
  }),
  component: LoginPage,
});
