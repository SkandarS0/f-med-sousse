import { fromTypes, openapi } from "@elysiajs/openapi";
import { Elysia } from "elysia";

const app = new Elysia({
  name: "f-med-sousse-api",
})

  .use(
    openapi({
      references: fromTypes(),
    }),
  )
  .get("/", () => "Hello, Elysia!")
  .listen(8000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
