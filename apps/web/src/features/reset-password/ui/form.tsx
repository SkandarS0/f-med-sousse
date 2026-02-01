import { useRouter } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useResetPasswordMutation } from "@/features/reset-password/api/use-reset-password.ts";
import {
  ResetPasswordFormSchema,
  type ResetPasswordSearchSchema,
} from "@/features/reset-password/model/schema.ts";
import { useAppForm } from "@/shared/lib/form.ts";
import { Form } from "@/shared/ui/form/wrapper.tsx";
import { FieldGroup } from "@/shared/ui/primitives/field.tsx";

export function ResetPasswordForm({ email, token }: ResetPasswordSearchSchema) {
  const { t } = useTranslation(["models", "pages"]);
  const resetPasswordMutation = useResetPasswordMutation();
  const router = useRouter();
  const form = useAppForm({
    defaultValues: { email, password: "", password_confirmation: "" },
    validators: {
      onChange: ResetPasswordFormSchema,
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
            label={t("pages:reset-password.components.form.submit")}
            error={resetPasswordMutation.error}
            success={resetPasswordMutation.data?.message}
            withReset
          />
        </form.AppForm>
      </FieldGroup>
    </Form>
  );
}
