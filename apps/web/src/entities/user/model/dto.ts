import z from "zod";
import { apiUserSchema } from "../api/dto";

export const userSchema = apiUserSchema
  .omit({
    first_name: true,
    last_name: true,
    email_verified_at: true,
    created_at: true,
    updated_at: true,
  })
  .extend({
    firstName: z.string(),
    lastName: z.string(),
    emailVerifiedAt: z.string().nullable(),
    createdAt: z.string(),
    updatedAt: z.string().nullable(),
  });

export type User = z.infer<typeof userSchema>;

export type UserType = z.infer<typeof apiUserSchema.shape.type>;
