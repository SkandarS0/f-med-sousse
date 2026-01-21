import { z } from "zod";
import { userSchema } from "@/entities/user/model/schemas";

export const loginSchema = userSchema
  .pick({
    email: true,
  })
  .extend({
    password: z.string(),
  });

export type LoginSchema = z.infer<typeof loginSchema>;
