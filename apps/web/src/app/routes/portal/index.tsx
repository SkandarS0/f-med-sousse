import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useAuthLogout } from "@/features/auth/api/use-logout";
import { useRouteTitle } from "@/shared/routes/title";
import { Button } from "@/shared/ui/primitives/button";

export const Route = createFileRoute("/portal/")({
  component: RouteComponent,
});

function RouteComponent() {
  const logoutMutation = useAuthLogout();
  const title = useRouteTitle(Route.to);
  const router = useRouter();
  const handleLogout = async () => {
    await logoutMutation.mutateAsync();
    router.invalidate();
    router.navigate({ to: "/login", replace: true });
  };
  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
        <title>{title}</title>
        <p>
          Edit <code>src/routes/index.tsx</code> and save to reload.
        </p>
        <Button onClick={handleLogout}>Logout</Button>
        <Button>
          <Link to="/login">Login</Link>
        </Button>
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
