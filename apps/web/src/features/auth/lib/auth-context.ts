import { createContext } from "react";
import type { UserType } from "@/entities/user/api/dto";
import type { User } from "@/entities/user/model/dto";

export type AuthContextType = {
  user: User | undefined;
  isAuthenticated: boolean;
  userTypeOf: (userType: UserType) => boolean;
};

export const AuthContext = createContext<AuthContextType>({
  user: undefined,
  isAuthenticated: false,
  userTypeOf: () => false,
});
