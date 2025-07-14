/**
 * Chuyển chuỗi có dấu thành không dấu
 * @param str - Chuỗi cần xử lý
 * @returns Chuỗi đã được loại bỏ dấu
 */
export const removeVietnameseAccents = (str: string): string => {
  if (!str) return "";

  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
};

/**
 * So sánh hai chuỗi không phân biệt dấu và hoa thường
 * @param str1 - Chuỗi cần so sánh
 * @param str2 - Chuỗi cần so sánh
 * @returns true nếu hai chuỗi giống nhau không phân biệt dấu
 */
export const compareStringNoAccents = (str1: string, str2: string): boolean => {
  const normalized1 = removeVietnameseAccents(str1.toLowerCase());
  const normalized2 = removeVietnameseAccents(str2.toLowerCase());

  return normalized2.includes(normalized1);
};
