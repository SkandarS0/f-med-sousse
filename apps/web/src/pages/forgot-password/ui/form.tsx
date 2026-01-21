import { useTranslation } from "react-i18next";
import { useAppForm } from "@/shared/lib/form";
import { Form } from "@/shared/ui/form/wrapper";
import { FieldGroup } from "@/shared/ui/primitives/field";
import { useAuthForgotPassword } from "../api/mutation";
import { forgotPasswordFormSchema } from "../model/schema";

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
          />
        </form.AppForm>
      </FieldGroup>
    </Form>
  );
}
