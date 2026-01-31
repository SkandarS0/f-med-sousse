import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "@/app/styles/tailwind.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/app/providers/auth-provider.tsx";
import { LocaleProvider } from "@/app/providers/locale-provider.tsx";
import { AppRouterProvider } from "@/app/providers/router-provider.tsx";
import { queryClient } from "@/shared/api/query-client.ts";
import reportWebVitals from "@/shared/lib/web-vitals.ts";

// Render the app
const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <LocaleProvider>
          <AuthProvider>
            <AppRouterProvider />
          </AuthProvider>
        </LocaleProvider>
      </QueryClientProvider>
    </StrictMode>,
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example, reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
