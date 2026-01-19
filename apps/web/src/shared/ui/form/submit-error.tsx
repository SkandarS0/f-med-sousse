import type { ApiErrorResponse } from "@/shared/api/axios";

type SubmitErrorProps = {
  error?: ApiErrorResponse;
};

export function SubmitError({ error }: SubmitErrorProps) {
  if (!error) return null;
  return (
    <div
      role="alert"
      aria-live="assertive"
      className="text-sm text-center text-destructive"
    >
      {error.message}
    </div>
  );
}
