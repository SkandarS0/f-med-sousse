import { useFieldContext } from "@/shared/lib/form";
import { FormField, FormFieldErrors, FormFieldLabel } from "../primitives/form";

type BaseFormFieldProps = {
  children: React.ReactNode;
  label: string;
};
export function BaseFormField({ children, label }: BaseFormFieldProps) {
  const field = useFieldContext<string>();
  const isInvalid = !field.state.meta.isValid;
  return (
    <FormField
      name={field.name}
      invalid={isInvalid}
      dirty={field.state.meta.isDirty}
      touched={field.state.meta.isTouched}
    >
      <FormFieldLabel htmlFor={field.name}>{label}</FormFieldLabel>
      {children}
      <FormFieldErrors match={isInvalid} errors={field.state.meta.errors} />
    </FormField>
  );
}
