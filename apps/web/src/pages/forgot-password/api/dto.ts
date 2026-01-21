import type { ForgotPasswordFormSchema } from "../model/schema";

export type ForgotPasswordRequestBody = ForgotPasswordFormSchema;
export type ForgotPasswordResponseBody = { message: string };
