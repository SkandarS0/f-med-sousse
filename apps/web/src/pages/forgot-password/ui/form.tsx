import { useTranslation } from "react-i18next";
import { useAppForm } from "@/shared/lib/form";
import { FieldGroup } from "@/shared/ui/primitives/field";
import { forgotPasswordSchema } from "../model/schema";

export function ForgotPasswordForm() {
  const { t } = useTranslation("models");
  const form = useAppForm({
    defaultValues: { email: "" },
    validators: {
      onChange: forgotPasswordSchema,
    },
  });
  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
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
            label={t("user.actions.send_reset_password_instructions")}
            // error={loginMutation.error}
          />
        </form.AppForm>
      </FieldGroup>
    </form>
  );
}
