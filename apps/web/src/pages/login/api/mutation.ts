import { useMutation } from "@tanstack/react-query";
import { userQueries } from "@/entities/user/api/query";
import type { LoginFormSchema } from "@/entities/user/model/schemas";
import { api, getCsrfCookie } from "@/shared/api/axios";

type LoginRequestBody = LoginFormSchema;

type LoginResponseBody = { two_factor: boolean };

export function useAuthLogin() {
  return useMutation({
    mutationFn: (data: LoginFormSchema) => loginRequest(data),
    onSuccess(_data, _variables, _onMutateResult, context) {
      context.client.refetchQueries(userQueries.xGet());
    },
  });
}

async function loginRequest(data: LoginRequestBody) {
  await getCsrfCookie();
  return await api.post<LoginResponseBody>("/api/auth/login", data);
}
