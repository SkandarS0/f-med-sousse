import { useMutation } from "@tanstack/react-query";
import { api, getCsrfCookie } from "@/shared/api/axios";
import type { ResetPasswordFormSchema } from "../model/schema";
import type {
  ResetPasswordRequestBody,
  ResetPasswordResponseBody,
} from "./dto";

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
    api.post<ResetPasswordResponseBody>("/api/auth/reset-password", data),
  );
}
