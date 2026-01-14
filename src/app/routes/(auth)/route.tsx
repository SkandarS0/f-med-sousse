import { createFileRoute } from "@tanstack/react-router";
import { UnauthenticatedLayout } from "@/app/layouts/unauthenticated";

export const Route = createFileRoute("/(auth)")({
  component: UnauthenticatedLayout,
});
