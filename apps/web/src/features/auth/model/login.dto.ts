import type { LoginSchema } from "./schema";

export type LoginRequestBody = LoginSchema;
export type LoginResponseBody = { two_factor: boolean };
