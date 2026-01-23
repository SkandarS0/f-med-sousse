import { createContext, useContext } from "react";
import type { User, UserType } from "../model/dto";

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

export function useAuth() {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error(
      "useAuth must be used within a Component using the AuthContext",
    );
  }
  return authContext;
}
