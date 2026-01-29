import { IconLoader3 } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import { userQueries } from "@/entities/user/api/query";
import { AuthContext } from "@/features/auth/lib/auth-context";

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const userQuery = useQuery(userQueries.xGet());
  const user = userQuery.data;
  const isAuthenticated = Boolean(user);

  if (userQuery.isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <IconLoader3 className="animate-spin" />
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        userTypeOf: (userType) => user?.type === userType,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
