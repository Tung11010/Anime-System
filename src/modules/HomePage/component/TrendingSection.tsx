// src/modules/HomePage/components/TrendingSection.tsx
import { VerticalCard } from "@/component/Card";
import { SectionHeading } from "@/component/Section";

const mockTrendingData = [
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
];

const TrendingSection = () => {
  return (
    <section>
      <SectionHeading title="TRENDING NOW" size="large" showViewAll />
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {mockTrendingData.map((item) => (
          <VerticalCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
