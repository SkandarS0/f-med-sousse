import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/portal")({
  beforeLoad(ctx) {
    console.log("Authenticated route beforeLoad", ctx);
  },
});
