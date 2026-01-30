import type { ResetPasswordFormSchema } from "@/pages/reset-password/model/schema.ts";

export type ResetPasswordRequestBody = ResetPasswordFormSchema;
export type ResetPasswordResponseBody = { message: string };
