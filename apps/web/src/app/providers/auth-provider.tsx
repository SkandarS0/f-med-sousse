import { IconLoader } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "@/features/auth/lib/use-auth";
import { userQueries } from "@/entities/user/api/query";

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
        <IconLoader className="animate-spin" />
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        userOfType: (userType) => user?.type === userType,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
