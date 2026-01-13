import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/(authenticated)/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
        <p>
          Edit <code>src/routes/index.tsx</code> and save to reload.
        </p>
        <HelloComponent />
        <ToggleLanguageComponent />
      </header>
    </div>
  );
}

function ToggleLanguageComponent() {
  const { i18n } = useTranslation();
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLang);
  };
  return (
    <button
      type="button"
      className="mt-4 p-2 bg-blue-500 text-white rounded"
      onClick={toggleLanguage}
    >
      Toggle Language between {i18n.languages}
    </button>
  );
}

function HelloComponent() {
  const { t } = useTranslation();
  return <h1 className="text-3xl font-bold">{t("hello_world")}</h1>;
}
