import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "../styles/tailwind.css";
import { I18nextProvider } from "react-i18next";
import { routerInstance } from "@/shared/config/tanstack-router";
import { i18nextInstance } from "@/shared/i18n/i18next";
import reportWebVitals from "@/shared/lib/web-vitals";

const router = routerInstance();

// Render the app
const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <I18nextProvider i18n={i18nextInstance}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </StrictMode>,
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
