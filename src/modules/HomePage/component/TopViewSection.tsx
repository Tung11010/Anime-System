import { HorizonCard } from "@/component/Card";
import { SectionHeading } from "@/component/Section";

const mockTopViewData = [
  {
    id: 1,
    link: "#",
    episode: "11/98",
    views: 9149,
    title: "Boruto: Naruto Next Generations",
    thumbnail: "https://preview.colorlib.com/theme/anime/img/trending/trend-1.jpg",
  },
  {
    id: 2,
    link: "#",
    episode: "11/98",
    views: 9149,
    title: "Boruto: Naruto Next Generations",
    thumbnail: "https://preview.colorlib.com/theme/anime/img/sidebar/tv-2.jpg",
  },
  {
    id: 3,
    link: "#",
    episode: "11/98",
    views: 9149,
    title: "Boruto: Naruto Next Generations",
    thumbnail: "https://preview.colorlib.com/theme/anime/img/sidebar/tv-3.jpg",
  },
  {
    id: 4,
    link: "#",
    episode: "11/98",
    views: 9149,
    title: "Boruto: Naruto Next Generations",
    thumbnail: "https://preview.colorlib.com/theme/anime/img/sidebar/tv-4.jpg",
  },
  
  // thêm các object khác nếu cần
];

const TopViewSection = () => {
  return (
    <section className="mb-6">
      <SectionHeading title="Top View" size="medium" />
      <div className="flex flex-col gap-3 mb-6">
        {mockTopViewData.map((movie) => (
          <HorizonCard
            key={movie.id}
            link={movie.link}
            episode={movie.episode}
            views={movie.views}
            title={movie.title}
            thumbnail={movie.thumbnail}
          />
        ))}
      </div>
    </section>
  );
};

export default TopViewSection;
