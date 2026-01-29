import { IconLoader2 } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import type { ApiErrorResponse } from "@/shared/api/axios";
import { useFormContext } from "@/shared/lib/form";
import { FadeMessage } from "@/shared/ui/fade-message";
import { Button } from "../primitives/button";
import { Separator } from "../primitives/separator";

type SubmitButtonProps = {
  label: string;
  withReset?: boolean;
  disabled?: boolean;
  error?: ApiErrorResponse | null;
  success?: string | null;
  messageTimeout?: number;
};

export function SubmitButton({
  error = null,
  success = null,
  messageTimeout = 5000,
  withReset = false,
  ...props
}: SubmitButtonProps) {
  const form = useFormContext();
  const { t } = useTranslation("shared_ui");
  const [errorState, setErrorState] = useState<ApiErrorResponse | null>(error);
  const [successState, setSuccessState] = useState<string | null>(success);

  useEffect(() => {
    setErrorState(error ?? null);
  }, [error]);

  useEffect(() => {
    setSuccessState(success ?? null);
  }, [success]);

  return (
    <>
      <Separator className="mt-2" />
      {errorState && (
        <FadeMessage
          message={errorState.message}
          timeout={messageTimeout}
          className="text-destructive"
          onTimeout={() => setErrorState(null)}
        />
      )}
      {successState && (
        <FadeMessage
          message={successState}
          timeout={messageTimeout}
          className="text-success"
          onTimeout={() => setSuccessState(null)}
        />
      )}
      <form.Subscribe>
        {(state) => (
          <Button
            type="submit"
            size={"lg"}
            disabled={state.isSubmitting || !state.canSubmit}
          >
            {state.isSubmitting ? (
              <IconLoader2 className="animate-spin" />
            ) : (
              props.label
            )}
          </Button>
        )}
      </form.Subscribe>
      {withReset && (
        <Button
          type="reset"
          variant={"outline"}
          disabled={form.state.isSubmitting}
          onClick={() => form.reset()}
        >
          {t("common.form.reset")}
        </Button>
      )}
    </>
  );
}
