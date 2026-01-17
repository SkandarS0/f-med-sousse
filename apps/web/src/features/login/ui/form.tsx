import { useTranslation } from "react-i18next";
import { useAppForm } from "@/shared/lib/form";
import { FieldGroup } from "@/shared/ui/primitives/field";
import { loginSchema } from "../model/schema";

export function LoginForm() {
  const { t } = useTranslation("models");
  const form = useAppForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onChange: loginSchema,
    },
    onSubmit: async ({ value }) => {
      // simulate network request
      console.log("Submitted values:", value);
      await new Promise((r) => setTimeout(r, 9000));
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
          <form.AppField name={"password"}>
            {(field) => (
              <field.PasswordInput
                label={t("user.attributes.password")}
                autoComplete="current-password"
              />
            )}
          </form.AppField>
          <form.SubmitButton label={t("user.actions.login")} />
        </form.AppForm>
      </FieldGroup>
    </form>
  );
}
