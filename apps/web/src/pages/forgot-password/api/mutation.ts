import { useMutation } from "@tanstack/react-query";
import { api, getCsrfCookie } from "@/shared/api/axios";
import type { ForgotPasswordFormSchema } from "../model/schema";
import type {
  ForgotPasswordRequestBody,
  ForgotPasswordResponseBody,
} from "./dto";
import { fortifyConfig } from "@/shared/config/fortify";

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
    api.post<ForgotPasswordResponseBody>(fortifyConfig.prefix("/forgot-password"), data),
  );
}
