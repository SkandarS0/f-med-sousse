import type z from "zod";
import { apiUserSchema } from "../api/dto";

export const userSchema = apiUserSchema
  .omit({
    first_name: true,
    last_name: true,
    full_name: true,
    email_verified_at: true,
    created_at: true,
    updated_at: true,
  })
  .extend({
    firstName: apiUserSchema.shape.first_name,
    lastName: apiUserSchema.shape.last_name,
    fullName: apiUserSchema.shape.full_name,
    emailVerifiedAt: apiUserSchema.shape.email_verified_at,
    createdAt: apiUserSchema.shape.created_at,
    updatedAt: apiUserSchema.shape.updated_at,
  });

export type User = z.infer<typeof userSchema>;

export type UserType = z.infer<typeof apiUserSchema.shape.type>;
