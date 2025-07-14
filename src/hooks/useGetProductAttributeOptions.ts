import { safeApiClient } from "@/services";
import { IOption } from "@/types";
import { useQuery } from "@tanstack/react-query";

type ProductAttributeType = "producttypes" | "trademark" | "all";

const getProductAttributeOptions = async (type: ProductAttributeType) => {
  const response = await safeApiClient.get<IOption[]>("/api/v1/product-attributes/options", {
    params: {
      type,
    },
  });
  return response.data;
};

export const useGetProductAttributeOptions = (type: ProductAttributeType) => {
  return useQuery({
    queryKey: ["product-attribute-options", type],
    queryFn: () => getProductAttributeOptions(type),
    select: (data) => {
      if (type === "all") {
        return data.map((item) => {
          let label = item.label;
          if (item.type === "producttypes") {
            label = "Danh mục: " + label;
          } else if (item.type === "trademark") {
            label = "Thương hiệu: " + label;
          }
          return { label, value: item.value };
        });
      }
      return data;
    },
  });
};
