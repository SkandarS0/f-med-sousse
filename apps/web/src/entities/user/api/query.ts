import { queryOptions } from "@tanstack/react-query";
import { api } from "@/shared/api/axios";
import { userMapper } from "../lib/mapper";
import type { ApiUser } from "./dto";

export const userQueries = {
  get: () => ["user"] as const,
  xGet: () =>
    queryOptions({
      queryKey: userQueries.get(),
      queryFn: async () => {
        const response = await getUserRequest();
        return response.data;
      },
      select: (data) => userMapper.fromApi(data),
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
      throwOnError: false,
    }),
};

async function getUserRequest() {
  return await api.get<ApiUser>("/api/user");
}
