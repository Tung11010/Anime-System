import { AnyElement } from "@/types";
import { useQueryClient } from "@tanstack/react-query";

export const useGetDataFormQueryKey = <T>(queryKey: AnyElement, defaultValue: T) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<T>(queryKey);
  return data ?? defaultValue;
};
