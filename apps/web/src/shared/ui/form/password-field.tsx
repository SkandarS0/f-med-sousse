import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { type InputHTMLAttributes, useState } from "react";
import { useTranslation } from "react-i18next";
import { useFieldContext } from "@/shared/lib/form";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../primitives/input-group";
import { BaseFormField } from "./base-field";

type PasswordFormFieldProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function PasswordFormField({
  label = "Password",
  ...props
}: PasswordFormFieldProps) {
  const field = useFieldContext<string>();
  const [hidden, setHidden] = useState(true);
  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
  const { t } = useTranslation("shared_ui");
  return (
    <BaseFormField label={label}>
      <InputGroup>
        <InputGroupInput
          id={field.name}
          name={field.name}
          type={hidden ? "password" : "text"}
          value={field.state.value}
          onChange={(e) => field.handleChange(e.target.value)}
          onBlur={field.handleBlur}
          aria-invalid={isInvalid}
          {...props}
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            aria-label={t(
              hidden ? "password-input.show" : "password-input.hide",
            )}
            title={t(hidden ? "password-input.show" : "password-input.hide")}
            size="icon-xs"
            onClick={() => setHidden((v) => !v)}
          >
            {hidden ? <IconEyeOff /> : <IconEye />}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </BaseFormField>
  );
}
