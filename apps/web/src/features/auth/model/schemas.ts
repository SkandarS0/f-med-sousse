import * as z from "zod/mini";
import { User } from "@/entities/user/model/dto";

export const LoginFormSchema = z.extend(
  z.pick(User, {
    email: true,
  }),
  {
    password: z.string().check(z.minLength(1)),
    remember: z.boolean(),
  },
);

export type LoginFormSchema = z.infer<typeof LoginFormSchema>;
