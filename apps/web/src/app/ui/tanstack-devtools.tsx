import { TanStackDevtools } from "@tanstack/react-devtools";
import { formDevtoolsPlugin } from "@tanstack/react-form-devtools";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

export function TanstackDevToolsIntegration() {
  return (
    <TanStackDevtools
      config={{ position: "bottom-right" }}
      plugins={[
        {
          name: "TanStack Router",
          render: <TanStackRouterDevtoolsPanel />,
        },
        {
          name: "Tanstack Query",
          render: <ReactQueryDevtoolsPanel />,
        },
        formDevtoolsPlugin(),
      ]}
    />
  );
}
