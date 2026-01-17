import { useFieldContext } from "@/shared/lib/form";
import { Input } from "../primitives/input";
import { BaseFormField } from "./base-field";

type EmailFormFieldProps = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function EmailFormField({
  label = "Email",
  ...inputProps
}: EmailFormFieldProps) {
  const field = useFieldContext<string>();
  const isInvalid = !field.state.meta.isValid;

  return (
    <BaseFormField label={label}>
      <Input
        id={field.name}
        name={field.name}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
        type="email"
        aria-invalid={isInvalid}
        {...inputProps}
      />
    </BaseFormField>
  );
}
