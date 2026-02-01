import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useAuthLogout } from "@/features/auth/api/use-logout.ts";
import { LanguageToggle } from "@/features/change-language/ui/toggle.tsx";
import { Button } from "@/shared/ui/primitives/button.tsx";

// Route for demo purposes
export const Route = createFileRoute("/portal")({
  component: RouteComponent,
});

function RouteComponent() {
  const logoutMutation = useAuthLogout();
  const router = useRouter();
  const handleLogout = async () => {
    await logoutMutation.mutateAsync();
    await router.invalidate();
    await router.navigate({ to: "/login", replace: true });
  };
  return (
    <div className="text-center">
      <header
        className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
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
        <LanguageToggle as="links" />
      </header>
    </div>
  );
}

function HelloComponent() {
  const { t } = useTranslation();
  return <h1 className="text-3xl font-bold">{t("hello_world")}</h1>;
}
