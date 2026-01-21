import { IconLoader2 } from "@tabler/icons-react";
import type { ApiErrorResponse } from "@/shared/api/axios";
import { useFormContext } from "@/shared/lib/form";
import { Button } from "../primitives/button";
import { Separator } from "../primitives/separator";

type SubmitButtonProps = {
  label: string;
  disabled?: boolean;
  error?: ApiErrorResponse | null;
  success?: string | null;
};

export function SubmitButton({
  error = null,
  success = null,
  ...props
}: SubmitButtonProps) {
  const form = useFormContext();

  return (
    <>
      <Separator className="mt-2" />
      {error && (
        <div
          role="alert"
          aria-live="assertive"
          className="text-sm text-center text-destructive"
        >
          {error.message}
        </div>
      )}
      {success && (
        <div
          role="alert"
          aria-live="assertive"
          className="text-sm text-center text-success"
        >
          {success}
        </div>
      )}
      <form.Subscribe>
        {(state) => (
          <Button
            type="submit"
            disabled={
              state.isSubmitting || !state.canSubmit || state.isPristine
            }
          >
            {state.isSubmitting ? (
              <IconLoader2 className="animate-spin" />
            ) : (
              props.label
            )}
          </Button>
        )}
      </form.Subscribe>
    </>
  );
}
