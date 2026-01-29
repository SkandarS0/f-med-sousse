import * as z from "zod/mini";
import { apiUserSchema } from "../api/dto";

export const userSchema = z.extend(
  z.omit(apiUserSchema, {
    first_name: true,
    last_name: true,
    email_verified_at: true,
    created_at: true,
    updated_at: true,
  }),
  {
    firstName: apiUserSchema.shape.first_name,
    lastName: apiUserSchema.shape.last_name,
    emailVerifiedAt: apiUserSchema.shape.email_verified_at,
    createdAt: apiUserSchema.shape.created_at,
    updatedAt: apiUserSchema.shape.updated_at,
  },
);

export type User = z.infer<typeof userSchema>;
