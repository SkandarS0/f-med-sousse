import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

export const Route = createFileRoute("/forget-password")({
  component: RouteComponent,

  validateSearch: z.object({
    email: z.email().optional(),
  }),
});

function RouteComponent() {
  const search = Route.useSearch();
  return (
    <div>
      Hello "/forget-password"!
      <span>Your email is {search.email ?? "not provided"}</span>
    </div>
  );
}
