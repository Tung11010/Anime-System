import { VerticalCard } from "@/component/Card";
import { SectionHeading } from "@/component/Section";
import { useParams } from "react-router-dom";


// Fake mapping slug → title
const sectionTitleMap: Record<string, string> = {
    "trending-now": "TRENDING NOW",
    "popular-show": "POPULAR SHOW",
    "live-action": "LIVE ACTION"
};

// Mock data
const mockMovies = [
    {
      id: 1,
      link: "/anime/one-piece",
      thumbnail: "https://preview.colorlib.com/theme/anime/img/trending/trend-1.jpg",
      title: "The Seven Deadly Sins: Wrath of the Gods",
      episode: "18/18",
      views: 1200,
      comments: 650,
    },
    {
      id: 2,
      link: "/anime/one-piece",
      thumbnail: "https://preview.colorlib.com/theme/anime/img/trending/trend-5.jpg",
      title: "The Seven Deadly Sins: Wrath of the Gods",
      episode: "18/18",
      views: 1200,
      comments: 650,
    },
    {
      id: 3,
      link: "/anime/one-piece",
      thumbnail: "https://preview.colorlib.com/theme/anime/img/trending/trend-6.jpg",
      title: "The Seven Deadly Sins: Wrath of the Gods",
      episode: "18/18",
      views: 1200,
      comments: 650,
    },
    {
      id: 4,
      link: "/anime/one-piece",
      thumbnail: "https://preview.colorlib.com/theme/anime/img/popular/popular-2.jpg.webp",
      title: "The Seven Deadly Sins: Wrath of the Gods",
      episode: "18/18",
      views: 1200,
      comments: 650,
    },
    {
      id: 5,
      link: "/anime/one-piece",
      thumbnail: "https://preview.colorlib.com/theme/anime/img/popular/popular-3.jpg.webp",
      title: "The Seven Deadly Sins: Wrath of the Gods",
      episode: "18/18",
      views: 1200,
      comments: 650,
    },
    {
      id: 6,
      link: "/anime/one-piece",
      thumbnail: "https://preview.colorlib.com/theme/anime/img/popular/popular-4.jpg.webp",
      title: "The Seven Deadly Sins: Wrath of the Gods",
      episode: "18/18",
      views: 1200,
      comments: 650,
    },
    {
        id: 7,
        link: "/anime/one-piece",
        thumbnail: "https://preview.colorlib.com/theme/anime/img/recent/recent-3.jpg",
        title: "The Seven Deadly Sins: Wrath of the Gods",
        episode: "18/18",
        views: 1200,
        comments: 650,
      },
      {
        id: 8,
        link: "/anime/one-piece",
        thumbnail: "https://preview.colorlib.com/theme/anime/img/recent/recent-5.jpg",
        title: "The Seven Deadly Sins: Wrath of the Gods",
        episode: "18/18",
        views: 1200,
        comments: 650,
      },
      {
        id: 9,
        link: "/anime/one-piece",
        thumbnail: "https://preview.colorlib.com/theme/anime/img/recent/recent-2.jpg",
        title: "The Seven Deadly Sins: Wrath of the Gods",
        episode: "18/18",
        views: 1200,
        comments: 650,
      },
  ];

const CategorySection = () => {
  const { slug } = useParams();
  console.log(slug);
  

  const title = sectionTitleMap[slug || ""] || "CATEGORY"
  return (
    <div className="space-y-4">
      <SectionHeading title={title} />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {mockMovies.map((item) => (
            <VerticalCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
