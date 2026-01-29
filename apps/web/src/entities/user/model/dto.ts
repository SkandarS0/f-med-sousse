import * as z from "zod/mini";
import { ApiUser } from "../api/dto";

export const User = z.extend(
  z.omit(ApiUser, {
    first_name: true,
    last_name: true,
    email_verified_at: true,
    created_at: true,
    updated_at: true,
  }),
  {
    firstName: ApiUser.shape.first_name,
    lastName: ApiUser.shape.last_name,
    emailVerifiedAt: ApiUser.shape.email_verified_at,
    createdAt: ApiUser.shape.created_at,
    updatedAt: ApiUser.shape.updated_at,
  },
);

export type User = z.infer<typeof User>;
