import z from "zod";
import { userSchema } from "@/entities/user/model/schemas";

export const loginFormSchema = userSchema
  .pick({
    email: true,
  })
  .extend({
    password: z.string(),
  });

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
