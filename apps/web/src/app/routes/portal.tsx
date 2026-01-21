import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/features/auth/lib/use-auth";
import { useRouteTitle } from "@/shared/routes/title";
import { LanguageToggle } from "@/shared/ui/language-toggle";
import { Button } from "@/shared/ui/primitives/button";

// Route for demo purposes
export const Route = createFileRoute("/portal")({
  component: RouteComponent,
});

function RouteComponent() {
  const { logoutMutation } = useAuth();
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
        <Button>
          <Link to="/admin">Admin Portal</Link>
        </Button>
        <Button>
          <Link to="/student">Student Portal</Link>
        </Button>
        <HelloComponent />
        <LanguageToggle as="footer-link" />
      </header>
    </div>
  );
}
function HelloComponent() {
  const { t } = useTranslation();
  return <h1 className="text-3xl font-bold">{t("hello_world")}</h1>;
}
