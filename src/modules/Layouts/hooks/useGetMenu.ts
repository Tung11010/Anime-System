import { REACT_QUERY_KEYS, endpoint } from "@/constants";
import { safeApiClient } from "@/services";
import { useQuery } from "@tanstack/react-query";

export interface IMenuItem {
  code: string;
  name: string;
  parentId: string;
  ordinal: number;
  id: string;
  key: string;
  children: IMenuItem[];
  url?: string;
}

const fetcher = async () => {
  const res = await safeApiClient.get<IMenuItem[]>(endpoint.getMenu);
  return res.data;
};
export const useGetMenu = () => {
  return useQuery({
    queryKey: [REACT_QUERY_KEYS.GET_MENU],
    queryFn: fetcher,
  });
};
