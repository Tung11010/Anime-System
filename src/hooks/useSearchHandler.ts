import { cleanParams, decodeSearchParams } from "@/helpers";
import { useQueryClient } from "@tanstack/react-query";
import { isEqual } from "lodash";
import { NavigateOptions, useSearchParams } from "react-router-dom";

export const useSearchHandler = (REACT_QUERY_KEYS: string) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = decodeSearchParams(searchParams);
  const queryClient = useQueryClient();

  const handleSearch = (values: Record<string, string | number | null | undefined>, options?: NavigateOptions) => {
    const paramsFormClean = cleanParams({
      ...params,
      ...values,
      page: 1,
    });
    const paramsClean = cleanParams({
      ...params,
    });

    if (isEqual(paramsFormClean, paramsClean)) {
      queryClient.invalidateQueries({
        queryKey: [REACT_QUERY_KEYS],
      });
    } else {
      setSearchParams(
        cleanParams({
          ...params,
          ...values,
          page: 1,
        }),
        options
      );
    }
  };
  return {
    handleSearch,
  };
};
