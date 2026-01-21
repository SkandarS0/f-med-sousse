import { createFileRoute } from "@tanstack/react-router";
import { useRouteTitle } from "@/shared/routes/title";

export const Route = createFileRoute("/(errors)/unauthorized")({
  component: RouteComponent,
});

function RouteComponent() {
  const title = useRouteTitle("/unauthorized");
  return (
    <>
      <title>{title}</title>
    </>
  );
}
