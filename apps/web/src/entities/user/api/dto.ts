import * as z from "zod/mini";
import { supportedLngs } from "@/shared/i18n/i18next";

export enum UserType {
  ADMIN = "admin",
  STUDENT = "student",
}

export const ApiUser = z.object({
  id: z.uuid(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.email(),
  email_verified_at: z.nullable(z.iso.datetime()),
  type: z.enum(UserType),
  locale: z.enum(supportedLngs),
  created_at: z.iso.datetime(),
  updated_at: z.nullable(z.iso.datetime()),
});

export type ApiUser = z.infer<typeof ApiUser>;
