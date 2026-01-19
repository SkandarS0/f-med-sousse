import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { EmailFormField } from "@/shared/ui/form/email-field";
import { PasswordFormField } from "@/shared/ui/form/password-field";
import { SubmitButton } from "@/shared/ui/form/submit-button";
import { SubmitError } from "@/shared/ui/form/submit-error";

const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldComponents: {
    PasswordInput: PasswordFormField,
    EmailInput: EmailFormField,
  },
  formComponents: {
    SubmitButton,
    SubmitError,
  },
  fieldContext,
  formContext,
});

export { useFieldContext, useFormContext };
