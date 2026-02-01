import type {
  ResetPasswordFormSchema,
  ResetPasswordSearchSchema,
} from "@/features/reset-password/model/schema.ts";

export type ResetPasswordRequestBody = ResetPasswordFormSchema;
export type ResetPasswordResponseBody = { message: string };

export type ResetPasswordCheckTokenRequestBody = ResetPasswordSearchSchema;
