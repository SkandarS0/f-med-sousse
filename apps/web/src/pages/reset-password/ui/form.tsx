import { useRouter } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useAuthResetPassword } from "@/pages/reset-password/api/mutation.ts";
import { resetPasswordFormSchema } from "@/pages/reset-password/model/schema.ts";
import { useAppForm } from "@/shared/lib/form.ts";
import { Form } from "@/shared/ui/form/wrapper.tsx";
import { FieldGroup } from "@/shared/ui/primitives/field.tsx";

export function ResetPasswordForm({
  email,
  token,
}: {
  email: string;
  token: string;
}) {
  const { t } = useTranslation("models");
  const resetPasswordMutation = useAuthResetPassword();
  const router = useRouter();
  const form = useAppForm({
    defaultValues: { email, password: "", password_confirmation: "" },
    validators: {
      onChange: resetPasswordFormSchema,
    },
    onSubmit: async ({ value }) => {
      await resetPasswordMutation.mutateAsync({ ...value, token });
      setTimeout(async () => await router.navigate({ to: "/login" }), 3000);
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
                disabled
                readOnly
              />
            )}
          </form.AppField>
          <form.AppField name="password">
            {(field) => (
              <field.PasswordInput
                label={t("user.attributes.password")}
                autoComplete="new-password"
                autoFocus
              />
            )}
          </form.AppField>
          <form.AppField name="password_confirmation">
            {(field) => (
              <field.PasswordInput
                label={t("user.attributes.password_confirmation")}
                autoComplete="new-password"
              />
            )}
          </form.AppField>
          <form.SubmitButton
            label={t("user.actions.send_link")}
            error={resetPasswordMutation.error}
            success={resetPasswordMutation.data?.message}
            withReset
          />
        </form.AppForm>
      </FieldGroup>
    </Form>
  );
}
