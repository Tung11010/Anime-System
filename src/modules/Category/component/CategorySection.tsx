import { useParams, useSearchParams } from "react-router-dom";
import { VerticalCard } from "@/components/Card";
import { SectionHeading } from "@/components/Section";
import {
  useCategoryMoviesSlug,
  useRecentlyAddedMovies,
} from "../QueryHooks";
import { MoviePreview } from "../types";
import Pagination from "./Pagination";

const sectionTitleMap: Record<string, string> = {
  "trending-now": "TRENDING NOW",
  "popular-show": "POPULAR SHOW",
  "live-action": "LIVE ACTION",
  "anime": "ANIME",
  "china-3d": "CHINA 3D",
  "romance": "ROMANCE",
  "tu-tien": "TU TIÊN",
  "add-recently": "ADD RECENTLY SHOWS",
  "trending": "TRENDING NOW",
  "popular": "POPULAR SHOW",
};

const specialSlugs = ["popular", "add-recently", "trending"];

const CategorySection = () => {
  const { slug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);

  // --- Gọi hook luôn ở top level ---
  const recentlyAddedQuery = useRecentlyAddedMovies(page);
  const categoryQuery = useCategoryMoviesSlug(slug || "", page);

  // --- Chọn queryResult dựa vào slug ---
  let queryResult;
  if (slug && specialSlugs.includes(slug)) {
    switch (slug) {
      case "add-recently":
        queryResult = recentlyAddedQuery;
        break;
     
      default:
        queryResult = {
          data: { data: [], pagination: { totalPages: 1 } },
          isLoading: false,
          error: null,
        };
    }
  } else {
    queryResult = categoryQuery;
  }

  const { data, isLoading, error } = queryResult;

  const title = sectionTitleMap[slug || ""] || "CATEGORY";

  if (isLoading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">Lỗi khi lấy dữ liệu</div>;

  const movies: MoviePreview[] = data.data || [];
  const totalPages = data?.pagination?.totalPages || 1;

  return (
    <div className="space-y-4">
      <SectionHeading title={title} showOrderBy />

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

      <div className="flex justify-left">
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={(newPage) => {
            setSearchParams({ page: newPage.toString() });
            window.scrollTo({ top: 0, behavior: "instant" });
          }}
        />
      </div>
    </div>
  );
};

export default CategorySection;
