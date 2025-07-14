import { safeApiClient } from "@/services";
import { IOption } from "@/types";
import { useQuery } from "@tanstack/react-query";

const getUserOptions = async () => {
  const response = await safeApiClient.get<IOption[]>("/api/v1/users/options");
  return response.data;
};

export const useGetUserOptions = () => {
  return useQuery({
    queryKey: ["user-options"],
    queryFn: () => getUserOptions(),
  });
};
