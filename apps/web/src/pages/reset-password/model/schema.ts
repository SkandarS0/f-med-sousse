import * as z from "zod/mini";

export const resetPasswordFormSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .check(z.minLength(8))
    .check(z.regex(/[A-Z]/))
    .check(z.regex(/[a-z]/))
    .check(z.regex(/[0-9]/))
    .check(z.regex(/[\W_]/)),
  password_confirmation: z.string(),
});

export type ResetPasswordFormSchema = z.infer<
  typeof resetPasswordFormSchema
> & {
  token: string;
};
