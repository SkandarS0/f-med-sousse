import { IconLoader } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import { getUserQueryOptions } from "@/features/auth/api/get-user";
import { AuthContext } from "@/features/auth/lib/use-auth";

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const userQuery = useQuery(getUserQueryOptions);
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
    <AuthContext.Provider value={{ user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
