import z from "zod";

export const userSchema = z.object({
  id: z.uuid(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.email(),
  emailVerifiedAt: z.iso.datetime().nullable(),
  type: z.enum(["admin", "student"]),
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime().nullable(),
});

export type User = z.infer<typeof userSchema>;
