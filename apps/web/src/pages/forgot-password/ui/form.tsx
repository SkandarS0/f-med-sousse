import { useTranslation } from "react-i18next";
import { useAuthForgotPassword } from "@/pages/forgot-password/api/mutation.ts";
import { forgotPasswordFormSchema } from "@/pages/forgot-password/model/schema.ts";
import { useAppForm } from "@/shared/lib/form.ts";
import { Form } from "@/shared/ui/form/wrapper.tsx";
import { FieldGroup } from "@/shared/ui/primitives/field.tsx";

export function ForgotPasswordForm() {
  const { t } = useTranslation("models");
  const forgotPasswordMutation = useAuthForgotPassword();
  const form = useAppForm({
    defaultValues: { email: "" },
    validators: {
      onChange: forgotPasswordFormSchema,
    },
    onSubmit: async ({ value }) => {
      await forgotPasswordMutation.mutateAsync(value);
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

          <form.SubmitButton
            label={t("user.actions.send_link")}
            error={forgotPasswordMutation.error}
            success={forgotPasswordMutation.data?.message}
          />
        </form.AppForm>
      </FieldGroup>
    </Form>
  );
}
