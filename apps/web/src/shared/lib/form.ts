import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { CheckboxFormField } from "@/shared/ui/form/checkbox-field.tsx";
import { EmailFormField } from "@/shared/ui/form/email-field.tsx";
import { PasswordFormField } from "@/shared/ui/form/password-field.tsx";
import { SubmitButton } from "@/shared/ui/form/submit-button.tsx";

const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldComponents: {
    PasswordInput: PasswordFormField,
    EmailInput: EmailFormField,
    CheckboxInput: CheckboxFormField,
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
});

export { useFieldContext, useFormContext };
