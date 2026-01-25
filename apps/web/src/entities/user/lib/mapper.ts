import type { ApiUser } from "../api/dto";
import type { User } from "../model/dto";

const userMapper = {
  toApi: (user: User): ApiUser => ({
    id: user.id,
    first_name: user.firstName,
    last_name: user.lastName,
    full_name: user.fullName,
    email: user.email,
    email_verified_at: user.emailVerifiedAt,
    type: user.type,
    locale: user.locale,
    created_at: user.createdAt,
    updated_at: user.updatedAt,
  }),
  fromApi: (apiUser: ApiUser): User => ({
    id: apiUser.id,
    firstName: apiUser.first_name,
    lastName: apiUser.last_name,
    fullName: apiUser.full_name,
    email: apiUser.email,
    emailVerifiedAt: apiUser.email_verified_at,
    type: apiUser.type,
    locale: apiUser.locale,
    createdAt: apiUser.created_at,
    updatedAt: apiUser.updated_at,
  }),
};

export { userMapper };
