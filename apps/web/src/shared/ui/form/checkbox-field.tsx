import { useFieldContext } from "@/shared/lib/form";
import { Checkbox } from "../primitives/checkbox";
import { BaseFormField, type CommonFormFieldProps } from "./base-field";

type CheckboxFormFieldProps = CommonFormFieldProps &
  React.ComponentProps<typeof Checkbox>;

export function CheckboxFormField({ label, description, ...props }: CheckboxFormFieldProps) {
  const field = useFieldContext<boolean>();
  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
  return (
    <BaseFormField label={label} description={description} orientation={"horizontal"}>
      <Checkbox
        id={field.name}
        name={field.name}
        checked={field.state.value}
        onCheckedChange={(checked) => field.handleChange(checked)}
        onBlur={field.handleBlur}
        aria-invalid={isInvalid}
        {...props}
      />
    </BaseFormField>
  );
}
