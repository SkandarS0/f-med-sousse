import { useMutation } from "@tanstack/react-query";
import { userQueries } from "@/entities/user/api/query";
import { api, getCsrfCookie } from "@/shared/api/axios";
import type { LoginFormSchema } from "../model/schemas";

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
  return await api.post("/api/auth/logout");
}
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
