import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(authenticated)")({
  beforeLoad(ctx) {
    console.log("Authenticated route beforeLoad", ctx);
  },
});
