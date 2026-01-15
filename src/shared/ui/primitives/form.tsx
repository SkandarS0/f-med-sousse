import {
  type FieldErrorProps,
  type FieldLabelProps,
  Field as FieldPrimitive,
  type FieldRootProps,
} from "@base-ui/react/field";
import {
  Fieldset as FieldsetPrimitive,
  type FieldsetRootProps,
} from "@base-ui/react/fieldset";
import { cva, type VariantProps } from "class-variance-authority";
import type z from "zod";
import { cn } from "@/shared/lib/utils";

const formFieldVariants = cva(
  "data-[invalid]:text-destructive gap-2 group/field flex w-full",
  {
    variants: {
      orientation: {
        vertical: "flex-col [&>*]:w-full [&>.sr-only]:w-auto",
        horizontal:
          "flex-row items-center [&>[data-slot=field-label]]:flex-auto has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        responsive:
          "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto @md/field-group:[&>[data-slot=field-label]]:flex-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  },
);

function FormFieldset({ className, ...props }: FieldsetRootProps) {
  return (
    <FieldsetPrimitive.Root
      data-slot="fieldset"
      className={cn(
        "gap-4 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3 flex flex-col",
        className,
      )}
      {...props}
    />
  );
}

function FormField({
  className,
  orientation = "vertical",
  ...props
}: FieldRootProps & VariantProps<typeof formFieldVariants>) {
  return (
    <FieldPrimitive.Root
      data-slot="field"
      data-orientation={orientation}
      className={cn(formFieldVariants({ orientation }), className)}
      {...props}
    />
  );
}

function FormFieldLabel({ className, ...props }: FieldLabelProps) {
  return (
    <FieldPrimitive.Label
      data-slot="field-label"
      className={cn(
        "has-data-checked:bg-primary/5 has-data-checked:border-primary dark:has-data-checked:bg-primary/10 gap-2 group-data-[disabled=true]/field:opacity-50 has-[>[data-slot=field]]:rounded-lg has-[>[data-slot=field]]:border *:data-[slot=field]:p-2.5 group/field-label peer/field-label flex w-fit leading-snug",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col",
        className,
      )}
      {...props}
    />
  );
}

function FormFieldErrors({
  className,
  errors,
  ...props
}: FieldErrorProps & { errors: z.core.$ZodRawIssue[] }) {
  if (errors.length === 0) {
    return null;
  }

  const isSingleError = errors.length === 1;

  return (
    <FieldPrimitive.Error
      data-slot="field-error"
      render={() => (
        <div className={cn("text-destructive text-sm font-normal", className)}>
          {isSingleError ? (
            errors[0].message
          ) : (
            <ul className="ml-4 flex list-disc flex-col gap-1">
              {errors.map(
                (error) =>
                  error.message && <li key={error.code}>{error.message}</li>,
              )}
            </ul>
          )}
        </div>
      )}
      {...props}
    />
  );
}

export { FormField, FormFieldLabel, FormFieldErrors, FormFieldset };
