import type {
  ResetPasswordCheckTokenRequestBody,
  ResetPasswordRequestBody,
  ResetPasswordResponseBody,
} from "@/features/reset-password/api/dto.ts";
import { api, getCsrfCookie } from "@/shared/api/axios.ts";

export async function resetPasswordRequest(data: ResetPasswordRequestBody) {
  return await getCsrfCookie().then(() =>
    api.post<ResetPasswordResponseBody>("/auth/reset-password", data),
  );
}

export async function resetPasswordVerifyTokenRequest(
  data: ResetPasswordCheckTokenRequestBody,
) {
  return await api.post("/auth/reset-password/verify-token", data);
}
