import { IconLoader2 } from "@tabler/icons-react";
import { useFormContext } from "@/shared/lib/form";
import { Button } from "../primitives/button";

type SubmitButtonProps = {
  label: string;
  disabled?: boolean;
};

export function SubmitButton(props: SubmitButtonProps) {
  const form = useFormContext();

  return (
    <form.Subscribe>
      {(state) => (
        <Button
          type="submit"
          disabled={state.isSubmitting || !state.canSubmit || state.isPristine}
        >
          {state.isSubmitting ? (
            <IconLoader2 className="animate-spin" />
          ) : (
            props.label
          )}
        </Button>
      )}
    </form.Subscribe>
  );
}
