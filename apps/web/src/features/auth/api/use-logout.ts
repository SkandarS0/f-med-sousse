import { useMutation } from "@tanstack/react-query";
import { userQueries } from "@/entities/user/api/query";
import { api, getCsrfCookie } from "@/shared/api/axios";

export function useAuthLogout() {
  return useMutation({
    mutationFn: async () => logoutRequest(),
    onSuccess(_data, _variables, _onMutateResult, context) {
      context.client.resetQueries(userQueries.xGet());
    },
  });
}

async function logoutRequest() {
  await getCsrfCookie();
  return api.post("/api/auth/logout");
}
