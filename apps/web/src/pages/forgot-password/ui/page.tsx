import { useTranslation } from "react-i18next";
import { ForgotPasswordForm } from "@/pages/forgot-password/ui/form.tsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/primitives/card.tsx";

export function ForgotPasswordPage() {
  const { t } = useTranslation("pages");
  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("forgot-password.components.card.title")}</CardTitle>
        <CardDescription>
          {t("forgot-password.components.card.description")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ForgotPasswordForm />
      </CardContent>
    </Card>
  );
}
