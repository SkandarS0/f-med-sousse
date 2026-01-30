import { queryOptions } from "@tanstack/react-query";
import type { ApiUser } from "@/entities/user/api/dto.ts";
import { userMapper } from "@/entities/user/lib/mapper.ts";
import { api } from "@/shared/api/axios.ts";

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
