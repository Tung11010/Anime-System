import { useSearchParams } from "react-router-dom";
import { VerticalCard } from "@/components/Card";
import { SectionHeading } from "@/components/Section";; // 👈 custom hook cho search API
import { MoviePreview } from "../types";
import Pagination from "./Pagination";
import { useMoviesBySearch } from "../QueryHooks";

const SearchSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const keyword = searchParams.get("q") || ""; // 👈 lấy keyword từ query string ?q=naruto

  // gọi API search
  const searchQuery = useMoviesBySearch(keyword, page);

  const { data, isLoading, error } = searchQuery;

  if (!keyword) {
    return <div className="text-white text-xl">Hãy nhập từ khóa để tìm kiếm 🔍</div>;
  }

  if (isLoading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">Lỗi khi lấy dữ liệu</div>;

  const movies: MoviePreview[] = data?.data || [];
  const totalPages = data?.pagination?.totalPages || 1;
  

  return (
    <div className="space-y-4">
      <SectionHeading title={`Search result for "${keyword}"`} />

      {movies.length === 0 ? (
        <div className="text-white text-lg">Không tìm thấy kết quả nào 😥</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {movies.map((item: MoviePreview) => (
            <VerticalCard
              key={item.id}
              slug={item.slug}
              title={item.title}
              views={item.viewsCount}
              thumbnail={item.img_url}
              episode={item.episodesCount}
              comments={item.commentsCount}
            />
          ))}
        </div>
      )}

      {totalPages > 0 && (
        <div className="flex justify-left">
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={(newPage) => {
              setSearchParams({ q: keyword, page: newPage.toString() });
              window.scrollTo({ top: 0, behavior: "instant" });
            }}
          />
        </div>
      )}
    </div>
  );
};

export default SearchSection;
