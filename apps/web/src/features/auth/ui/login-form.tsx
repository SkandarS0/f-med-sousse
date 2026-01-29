import { getRouteApi, Link, useRouter } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useAppForm } from "@/shared/lib/form";
import { Form } from "@/shared/ui/form/wrapper";
import { Button } from "@/shared/ui/primitives/button";
import { FieldGroup } from "@/shared/ui/primitives/field";
import { useAuthLogin } from "../api/use-login";
import { loginFormSchema } from "../model/schemas";

const loginRouteApi = getRouteApi("/(guest)/login");

export function LoginForm() {
  const { t } = useTranslation(["models", "pages"]);
  const loginMutation = useAuthLogin();
  const router = useRouter();
  const loginRouteSearch = loginRouteApi.useSearch();
  const form = useAppForm({
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
    validators: {
      onChange: loginFormSchema,
    },
    onSubmit: async ({ value }) => {
      await loginMutation.mutateAsync(value);
      router.navigate({
        to: loginRouteSearch.redirectTo ?? "/portal",
      });
    },
  });

  return (
    <Form handleSubmit={form.handleSubmit}>
      <FieldGroup>
        <form.AppForm>
          <form.AppField name="email">
            {(field) => (
              <field.EmailInput
                label={t("user.attributes.email")}
                autoComplete="email"
                autoFocus
              />
            )}
          </form.AppField>
          <form.AppField name={"password"}>
            {(field) => (
              <field.PasswordInput
                label={t("user.attributes.password")}
                autoComplete="current-password"
              />
            )}
          </form.AppField>
          <form.AppField name="remember">
            {(field) => (
              <field.CheckboxInput
                label={t("pages:login.components.form.rememberMe")}
              />
            )}
          </form.AppField>
          <form.SubmitButton
            label={t("user.actions.login")}
            error={loginMutation.error}
          />
          <Button variant={"outline"} size={"sm"}>
            <Link to="/forgot-password" preload="intent">
              {t("pages:login.components.form.forgotPassword")}
            </Link>
          </Button>
        </form.AppForm>
      </FieldGroup>
    </Form>
  );
}
