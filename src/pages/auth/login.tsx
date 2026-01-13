import { getRouteApi } from "@tanstack/react-router";

const loginRoute = getRouteApi("/(auth)/login");

export function LoginPage() {
  const search = loginRoute.useSearch();
  return <div>{search.redirectTo}</div>;
}
