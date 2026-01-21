import { getRouteApi } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/primitives/card";
import { ResetPasswordForm } from "./form";

const resetPasswordRoute = getRouteApi("/(guest)/reset-password");

export function ResetPasswordPage() {
  const { t } = useTranslation("pages");
  const search = resetPasswordRoute.useSearch();
  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("reset-password.components.card.title")}</CardTitle>
        <CardDescription>
          {t("reset-password.components.card.description")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResetPasswordForm email={search.email} token={search.token} />
      </CardContent>
    </Card>
  );
}
