import { getRouteApi, Link, useRouter } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useAppForm } from "@/shared/lib/form";
import { Form } from "@/shared/ui/form/wrapper";
import { Button } from "@/shared/ui/primitives/button";
import { FieldGroup } from "@/shared/ui/primitives/field";
import { useAuthLogin } from "../api/use-login";
import { loginSchema } from "../model/schema";

const loginRouteApi = getRouteApi("/(guest)/login");

export function LoginForm() {
  const { t } = useTranslation("models");
  const loginMutation = useAuthLogin();
  const router = useRouter();
  const loginRouteSearch = loginRouteApi.useSearch();
  const form = useAppForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onChange: loginSchema,
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
          <form.SubmitButton
            label={t("user.actions.login")}
            error={loginMutation.error}
          />
        </form.AppForm>
        <Button>
          <Link to="/portal">Go to portal</Link>
        </Button>
      </FieldGroup>
    </Form>
  );
}
