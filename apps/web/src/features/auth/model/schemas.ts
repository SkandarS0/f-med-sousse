import z from "zod";
import { userSchema } from "@/entities/user/model/dto";

export const loginFormSchema = userSchema
  .pick({
    email: true,
  })
  .extend({
    password: z.string().min(1),
  });

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
