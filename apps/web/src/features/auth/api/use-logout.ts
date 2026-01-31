import { useMutation } from "@tanstack/react-query";
import { userQueries } from "@/entities/user/api/query.ts";
import { api, getCsrfCookie } from "@/shared/api/axios.ts";

export function useAuthLogout() {
  return useMutation({
    mutationFn: () => logoutRequest(),
    async onSuccess(_data, _variables, _onMutateResult, context) {
      await context.client.resetQueries(userQueries.xGet());
    },
  });
}

async function logoutRequest() {
  await getCsrfCookie();
  return await api.post("/auth/logout");
}
