import type { ResetPasswordFormSchema } from "@/features/reset-password/model/schema.ts";

export type ResetPasswordRequestBody = ResetPasswordFormSchema;
export type ResetPasswordResponseBody = { message: string };
