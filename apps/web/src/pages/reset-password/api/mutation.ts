import { useMutation } from "@tanstack/react-query";
import type {
  ResetPasswordRequestBody,
  ResetPasswordResponseBody,
} from "@/pages/reset-password/api/dto.ts";
import type { ResetPasswordFormSchema } from "@/pages/reset-password/model/schema.ts";
import { api, getCsrfCookie } from "@/shared/api/axios.ts";

export function useAuthResetPassword() {
  return useMutation({
    mutationFn: async (data: ResetPasswordFormSchema) => {
      const response = await resetPasswordRequest(data);
      return response.data;
    },
  });
}

async function resetPasswordRequest(data: ResetPasswordRequestBody) {
  return await getCsrfCookie().then(() =>
    api.post<ResetPasswordResponseBody>("/auth/reset-password", data),
  );
}
