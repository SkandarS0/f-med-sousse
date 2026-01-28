import { useContext } from "react";
import { AuthContext } from "./auth-context";

export function useAuth() {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error(
      "useAuth must be used within a Component using the AuthContext",
    );
  }
  return authContext;
}
