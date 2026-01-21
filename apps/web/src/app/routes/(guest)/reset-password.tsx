import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(guest)/reset-password")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/reset-password"!</div>;
}
