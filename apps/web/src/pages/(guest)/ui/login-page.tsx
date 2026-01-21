import { useTranslation } from "react-i18next";
import { LoginForm } from "@/features/auth/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/primitives/card";

export function LoginPage() {
  const { t } = useTranslation("pages");
  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("login.components.card.title")}</CardTitle>
        <CardDescription>
          {t("login.components.card.description")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  );
}
