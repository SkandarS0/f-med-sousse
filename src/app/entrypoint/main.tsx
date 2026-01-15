import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "../styles/tailwind.css";
import reportWebVitals from "@/shared/lib/web-vitals";
import { LocaleProvider } from "../providers/locale-provider";
import { AppRouterProvider } from "../providers/router-provider";
import { ThemeProvider } from "../providers/theme-provider";

// Render the app
const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <LocaleProvider>
        <ThemeProvider>
          <AppRouterProvider />
        </ThemeProvider>
      </LocaleProvider>
    </StrictMode>,
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
