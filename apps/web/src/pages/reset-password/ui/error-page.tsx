import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui/primitives/button.tsx";

export function ResetPasswordErrorPage() {
  const { t } = useTranslation("pages");
  return (
    <div className="text-center w-full max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">
        {t("reset-password.error.h1")}
      </h1>
      <p className="text-muted-foreground mb-6">
        {t("reset-password.error.p1")}
      </p>
      <div className="flex flex-col items-center gap-3">
        <Button size="lg">
          <Link to="/forgot-password">
            {t("reset-password.error.requestNewLink")}
          </Link>
        </Button>
        <Button variant={"secondary"} className={"text-muted-foreground"}>
          <Link to="/login">{t("reset-password.error.backToSignIn")}</Link>
        </Button>
      </div>
    </div>
  );
}
