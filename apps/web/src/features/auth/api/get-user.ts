import { queryOptions } from "@tanstack/react-query";
import { api } from "@/shared/api/axios";
import type { GetUserResponseBody } from "../model/user.dto";

export const getUserQueryOptions = queryOptions({
  queryKey: ["user"],
  queryFn: async () => {
    const response = await getUserRequest();
    return response.data;
  },
  retry: false,
  throwOnError: false,
});

async function getUserRequest() {
  return await api.get<GetUserResponseBody>("/api/user");
}
