import z from "zod";
import { supportedLngs } from "@/shared/i18n/i18next";

export const apiUserSchema = z.object({
  id: z.uuid(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.email(),
  email_verified_at: z.iso.datetime().nullable(),
  type: z.enum(["admin", "student"]),
  locale: z.enum(supportedLngs),
  created_at: z.iso.datetime(),
  updated_at: z.iso.datetime().nullable(),
});

export type ApiUser = z.infer<typeof apiUserSchema>;
