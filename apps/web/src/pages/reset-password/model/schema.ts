import z from "zod";

export const resetPasswordFormSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(8)
    .regex(/[A-Z]/)
    .regex(/[a-z]/)
    .regex(/[0-9]/)
    .regex(/[\W_]/),
  password_confirmation: z.string(),
});

export type ResetPasswordFormSchema = z.infer<
  typeof resetPasswordFormSchema
> & {
  token: string;
};
