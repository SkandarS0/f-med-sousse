import { useMutation } from "@tanstack/react-query";
import { resetPasswordRequest } from "@/features/reset-password/api/requests.ts";
import type { ResetPasswordFormSchema } from "@/features/reset-password/model/schema.ts";

export function useResetPasswordMutation() {
  return useMutation({
    mutationFn: async (data: ResetPasswordFormSchema) => {
      const response = await resetPasswordRequest(data);
      return response.data;
    },
  });
}
