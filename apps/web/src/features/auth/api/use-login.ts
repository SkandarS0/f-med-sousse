import { useMutation } from "@tanstack/react-query";
import { userQueries } from "@/entities/user/api/query";
import { api, getCsrfCookie } from "@/shared/api/axios";
import { fortifyConfig } from "@/shared/config/fortify";
import type { LoginFormSchema } from "../model/schemas";

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
  return await api.post<LoginResponseBody>(
    fortifyConfig.prefix("/login"),
    data,
  );
}
