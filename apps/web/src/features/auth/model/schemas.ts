import * as z from "zod/mini";
import { userSchema } from "@/entities/user/model/dto";

export const loginFormSchema = z.extend(
  z.pick(userSchema, {
    email: true,
  }),
  {
    password: z.string().check(z.minLength(1)),
  },
);

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
