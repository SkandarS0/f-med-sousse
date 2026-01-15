import { z } from "zod";
import { useAppForm } from "@/shared/lib/form";
import { FieldGroup } from "@/shared/ui/primitives/field";

export function LoginForm() {
  const form = useAppForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onChange: z
        .object({
          email: z.email(),
          password: z.string().min(8).min(1),
        })
        .required(),
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
          {(field) => <field.EmailInput autoComplete="email" />}
        </form.AppField>
        <form.AppField name={"password"}>
          {(field) => <field.PasswordInput label="Password" placeholder="f" />}
        </form.AppField>
        <form.AppForm>
          <form.SubmitButton label="Login" />
        </form.AppForm>
      </FieldGroup>
    </form>
  );
}
