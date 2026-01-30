import { useMutation } from "@tanstack/react-query";
import type {
  ForgotPasswordRequestBody,
  ForgotPasswordResponseBody,
} from "@/pages/forgot-password/api/dto.ts";
import type { ForgotPasswordFormSchema } from "@/pages/forgot-password/model/schema.ts";
import { api, getCsrfCookie } from "@/shared/api/axios.ts";
import { fortifyConfig } from "@/shared/config/fortify.ts";

export function useAuthForgotPassword() {
  return useMutation({
    mutationFn: async (data: ForgotPasswordFormSchema) => {
      const response = await forgotPasswordRequest(data);
      return response.data;
    },
  });
}

async function forgotPasswordRequest(data: ForgotPasswordRequestBody) {
  return await getCsrfCookie().then(() =>
    api.post<ForgotPasswordResponseBody>(
      fortifyConfig.prefix("/forgot-password"),
      data,
    ),
  );
}
