import { useMutation } from "@tanstack/react-query";
import { userQueries } from "@/entities/user/api/query";
import { api, getCsrfCookie } from "@/shared/api/axios";
import type { LoginRequestBody, LoginResponseBody } from "../model/login.dto";
import type { LoginSchema } from "../model/schema";

export function useAuthLogin() {
  return useMutation({
    mutationFn: async (data: LoginSchema) => await loginRequest(data),
    onSuccess(_data, _variables, _onMutateResult, context) {
      context.client.refetchQueries(userQueries.xGet());
    },
  });
}

async function loginRequest(data: LoginRequestBody) {
  return await getCsrfCookie().then(() =>
    api.post<LoginResponseBody>("/api/auth/login", data),
  );
}
