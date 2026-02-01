import { resetPasswordVerifyTokenRequest } from "@/features/reset-password/api/requests.ts";
import type { ResetPasswordSearchSchema } from "@/features/reset-password/model/schema.ts";

export const resetPasswordVerifyToken = async (
  data: ResetPasswordSearchSchema,
) => {
  return await resetPasswordVerifyTokenRequest(data);
};
