import { getRouteApi, Link, useRouter } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useAuthLogin } from "@/entities/user/api/mutation";
import { loginFormSchema } from "@/entities/user/model/schemas";
import { useAppForm } from "@/shared/lib/form";
import { Form } from "@/shared/ui/form/wrapper";
import { Button } from "@/shared/ui/primitives/button";
import { FieldGroup } from "@/shared/ui/primitives/field";

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
          <form.SubmitButton
            label={t("user.actions.login")}
            error={loginMutation.error}
          />
          <Button variant={"outline"} size={"sm"}>
            <Link to="/forgot-password" preload="intent">
              {t("user.questions.forgotPassword")}
            </Link>
          </Button>
        </form.AppForm>
      </FieldGroup>
    </Form>
  );
}
