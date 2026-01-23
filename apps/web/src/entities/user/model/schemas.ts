import z from "zod";
import { userSchema } from "./dto";

export const loginFormSchema = userSchema
  .pick({
    email: true,
  })
  .extend({
    password: z.string(),
  });

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
