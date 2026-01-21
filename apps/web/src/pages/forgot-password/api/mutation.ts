import { useMutation } from "@tanstack/react-query";
import { api, getCsrfCookie } from "@/shared/api/axios";
import type { ForgotPasswordFormSchema } from "../model/schema";
import type { ForgotPasswordRequestBody } from "./dto";

export function useAuthForgotPassword() {
  return useMutation({
    mutationFn: async (data: ForgotPasswordFormSchema) =>
      await forgotPasswordRequest(data),
  });
}

async function forgotPasswordRequest(data: ForgotPasswordRequestBody) {
  return await getCsrfCookie().then(() =>
    api.post("/api/auth/forgot-password", data),
  );
}
