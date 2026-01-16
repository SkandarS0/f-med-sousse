import { useTranslation } from "react-i18next";
import { z } from "zod";
import { useAppForm } from "@/shared/lib/form";
import { FieldGroup } from "@/shared/ui/primitives/field";

export function LoginForm() {
  const { t } = useTranslation("models");
  const form = useAppForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onChange: z
        .object({
          email: z.email(),
          password: z.string().min(8),
        }),
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
        <form.AppForm>
          <form.SubmitButton label={t("user.actions.login")} />
        </form.AppForm>
      </FieldGroup>
    </form>
  );
}
