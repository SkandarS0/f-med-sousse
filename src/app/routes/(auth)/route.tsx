import { createFileRoute } from "@tanstack/react-router";
import { UnauthenticatedLayout } from "@/app/ui/layouts/unauthenticated";

export const Route = createFileRoute("/(auth)")({
  component: UnauthenticatedLayout,
});
