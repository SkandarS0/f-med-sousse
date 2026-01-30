import type { ForgotPasswordFormSchema } from "@/pages/forgot-password/model/schema.ts";

export type ForgotPasswordRequestBody = ForgotPasswordFormSchema;
export type ForgotPasswordResponseBody = { message: string };
