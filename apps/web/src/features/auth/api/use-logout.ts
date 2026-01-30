import { useMutation } from "@tanstack/react-query";
import { userQueries } from "@/entities/user/api/query.ts";
import { api, getCsrfCookie } from "@/shared/api/axios.ts";
import { fortifyConfig } from "@/shared/config/fortify.ts";

export function useAuthLogout() {
  return useMutation({
    mutationFn: () => logoutRequest(),
    onSuccess(_data, _variables, _onMutateResult, context) {
      context.client.resetQueries(userQueries.xGet());
    },
  });
}

async function logoutRequest() {
  await getCsrfCookie();
  return await api.post(fortifyConfig.prefix("/logout"));
}
