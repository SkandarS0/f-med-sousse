import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import z from "zod";
import { ResetPasswordPage } from "@/pages/reset-password/ui/page";
import { useRouteTitle } from "@/shared/routes/title";
import { Button } from "@/shared/ui/primitives/button";

const searchSchema = z.object({
  email: z.email(),
  token: z.string(),
});

export const Route = createFileRoute("/(guest)/reset-password")({
  validateSearch: searchSchema,
  component: function ResetPasswordRoute() {
    const title = useRouteTitle("/reset-password");
    return (
      <>
        <title>{title}</title>
        <ResetPasswordPage />
      </>
    );
  },
  errorComponent: function ResetPasswordError() {
    const { t } = useTranslation("pages");
    return (
      <div className="text-center w-full max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-2">
          {t("reset-password.error.h1")}
        </h1>
        <p className="text-muted-foreground mb-6">
          {t("reset-password.error.p1")}
          <br />
          {t("reset-password.error.p2")}
        </p>
        <div className="flex flex-col items-center gap-3">
          <Button size="lg">
            <Link to="/forgot-password">
              {t("reset-password.error.requestNewLink")}
            </Link>
          </Button>
          <Button
            variant={"secondary"}
            className={"text-muted-foreground"}
            size="lg"
          >
            <Link to="/login">{t("reset-password.error.backToSignIn")}</Link>
          </Button>
        </div>
      </div>
    );
  },
});
