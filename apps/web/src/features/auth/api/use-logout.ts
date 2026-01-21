import { useMutation } from "@tanstack/react-query";
import { api, getCsrfCookie } from "@/shared/api/axios";

export function useAuthLogout() {
  return useMutation({
    mutationFn: async () => logoutRequest(),
    onSuccess(_data, _variables, _onMutateResult, context) {
      context.client.resetQueries({ queryKey: ["user"] });
    },
  });
}

async function logoutRequest() {
  await getCsrfCookie();
  return api.post("/api/auth/logout");
}
