import { createFileRoute } from "@tanstack/react-router";
import { GuestLayout } from "@/app/layouts/guest";

export const Route = createFileRoute("/(guest)")({
  component: GuestLayout,
});
