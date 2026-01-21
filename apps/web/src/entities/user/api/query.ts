import { queryOptions } from "@tanstack/react-query";
import { api } from "@/shared/api/axios";
import type { GetUserResponseBody } from "./dto";

export const userQueries = {
  get: () => ["user"] as const,
  xGet: () =>
    queryOptions({
      queryKey: userQueries.get(),
      queryFn: async () => {
        const response = await getUserRequest();
        return response.data;
      },
      retry: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
      throwOnError: false,
    }),
};

async function getUserRequest() {
  return await api.get<GetUserResponseBody>("/api/user");
}
