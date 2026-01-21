import { createContext, useContext } from "react";
import type { User } from "@/entities/user/model/schemas";
import { useAuthLogin } from "../api/use-login";
import { useAuthLogout } from "../api/use-logout";

export type AuthContextType = {
  user: User | undefined;
  isAuthenticated: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  user: undefined,
  isAuthenticated: false,
});

export function useAuth() {
  const authContext = useContext(AuthContext);
  const logoutMutation = useAuthLogout();
  const loginMutation = useAuthLogin();
  if (!authContext) {
    throw new Error(
      "useAuth must be used within an Component using the AuthContext",
    );
  }
  return {
    ...authContext,
    logoutMutation,
    loginMutation,
  };
}
