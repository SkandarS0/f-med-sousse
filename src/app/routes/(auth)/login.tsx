import { createFileRoute } from "@tanstack/react-router";
import z from "zod";
import { LoginPage } from "@/pages/login";
import { getRouteTitle } from "@/shared/routes/title";

export const Route = createFileRoute("/(auth)/login")({
  head: (ctx) => ({
    meta: [
      {
        title: getRouteTitle(ctx.match.fullPath),
      },
    ],
  }),
  validateSearch: z.object({
    redirectTo: z.string().optional(),
  }),
  component: LoginPage,
});
