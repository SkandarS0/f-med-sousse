import { useMutation } from "@tanstack/react-query";
import { api } from "@/shared/api/axios";
import type { LoginRequestBody, LoginResponseBody } from "../model/login.dto";
import type { LoginSchema } from "../model/schema";

export function useAuthLogin() {
  return useMutation({
    mutationFn: async (data: LoginSchema) => loginRequest(data),
  });
}

async function loginRequest(data: LoginRequestBody) {
  return await api.post<LoginResponseBody>("/api/auth/login", data);
}
