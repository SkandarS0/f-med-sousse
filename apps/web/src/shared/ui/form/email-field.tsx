import type * as React from "react";
import { useFieldContext } from "@/shared/lib/form.ts";
import { BaseFormField } from "@/shared/ui/form/base-field.tsx";
import { Input } from "@/shared/ui/primitives/input.tsx";

type EmailFormFieldProps = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function EmailFormField({
  label = "Email",
  ...inputProps
}: EmailFormFieldProps) {
  const field = useFieldContext<string>();
  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

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
