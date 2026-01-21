import { createFileRoute } from "@tanstack/react-router";
import { GuestLayout } from "@/shared/ui/layouts/guest";

export const Route = createFileRoute("/(guest)")({
  component: GuestLayout,
});
