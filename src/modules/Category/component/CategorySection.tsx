import { useParams, useSearchParams } from "react-router-dom";
import { VerticalCard } from "@/component/Card";
import { SectionHeading } from "@/component/Section";
import { useCategoryMoviesSlug } from "../QueryHooks";
import { MoviePreview } from "../types";
import Pagination from "./Pagination";

const sectionTitleMap: Record<string, string> = {
  "trending-now": "TRENDING NOW",
  "popular-show": "POPULAR SHOW",
  "live-action": "LIVE ACTION",
  "anime": "ANIME",
  "china-3d": "CHINA 3D",
  "romance": "ROMANCE",
  "tu-tien": "TU TIÊN"
};

const CategorySection = () => {
  const { slug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);

  const { data, isLoading, error } = useCategoryMoviesSlug(slug || "", page);
  const title = sectionTitleMap[slug || ""] || "CATEGORY";

  if (isLoading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">Lỗi khi lấy dữ liệu</div>;

  const movies = data.data || [];
  const totalPages = data?.pagination?.totalPages || 1;

  return (
    <div className="space-y-4">
      <SectionHeading title={title} showOrderBy />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {movies.map((item: MoviePreview) => (
          <VerticalCard
            key={item.id}
            link={""}
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
