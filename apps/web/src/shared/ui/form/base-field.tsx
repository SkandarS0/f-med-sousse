import type * as React from "react";
import { useFieldContext } from "@/shared/lib/form";
import {
  FieldContent,
  FieldDescription,
} from "@/shared/ui/primitives/field.tsx";
import {
  FormField,
  FormFieldErrors,
  FormFieldLabel,
} from "@/shared/ui/primitives/form.tsx";

export type CommonFormFieldProps = {
  label: string;
  description?: string;
};

type BaseFormFieldProps = {
  orientation?: "vertical" | "horizontal" | "responsive";
  children: React.ReactNode;
};

export function BaseFormField({
  children,
  label,
  orientation = "vertical",
  description,
}: CommonFormFieldProps & BaseFormFieldProps) {
  const field = useFieldContext();
  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
  return (
    <FormField
      orientation={orientation}
      name={field.name}
      invalid={isInvalid}
      dirty={field.state.meta.isDirty}
      touched={field.state.meta.isTouched}
    >
      {orientation === "vertical" ? (
        <>
          <FieldContent>
            <FormFieldLabel htmlFor={field.name}>{label}</FormFieldLabel>
            {description && <FieldDescription>{description}</FieldDescription>}
          </FieldContent>
          {children}
        </>
      ) : (
        <>
          {children}
          <FieldContent>
            <FormFieldLabel htmlFor={field.name}>{label}</FormFieldLabel>
            {description && <FieldDescription>{description}</FieldDescription>}
          </FieldContent>
        </>
      )}
      <FormFieldErrors match={isInvalid} errors={field.state.meta.errors} />
    </FormField>
  );
}
