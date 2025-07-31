import { HorizonCard } from "@/component/Card";
import { SectionHeading } from "@/component/Section";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define exact keys for filter
type FilterOption = "Day" | "Week" | "Month" | "Years";

type Movie = {
  id: number;
  link: string;
  episode: string;
  views: number;
  title: string;
  thumbnail: string;
};

const mockTopViewData: Record<FilterOption, Movie[]> = {
  Day: [
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
      episode: "9/12",
      views: 7452,
      title: "Jujutsu Kaisen",
      thumbnail: "https://preview.colorlib.com/theme/anime/img/sidebar/tv-2.jpg",
    },
    {
      id: 3,
      link: "#",
      episode: "24/24",
      views: 18500,
      title: "Attack on Titan",
      thumbnail: "https://preview.colorlib.com/theme/anime/img/sidebar/tv-3.jpg",
    },
    {
      id: 4,
      link: "#",
      episode: "220/220",
      views: 50000,
      title: "Naruto Shippuden",
      thumbnail: "https://preview.colorlib.com/theme/anime/img/sidebar/tv-4.jpg",
    },
      {
      id: 5,
      link: "#",
      episode: "220/220",
      views: 50000,
      title: "Naruto Shippuden",
      thumbnail: "https://preview.colorlib.com/theme/anime/img/sidebar/tv-5.jpg",
    },
    
  ],
  Week: [
    {
      id: 1,
      link: "#",
      episode: "24/24",
      views: 18500,
      title: "Attack on Titan",
      thumbnail: "https://preview.colorlib.com/theme/anime/img/sidebar/tv-3.jpg",
    },
    {
      id: 2,
      link: "#",
      episode: "12/12",
      views: 21000,
      title: "Demon Slayer",
      thumbnail: "https://preview.colorlib.com/theme/anime/img/sidebar/tv-4.jpg",
    },
  ],
  Month: [
    {
      id: 1,
      link: "#",
      episode: "12/12",
      views: 21000,
      title: "Demon Slayer",
      thumbnail: "https://preview.colorlib.com/theme/anime/img/sidebar/tv-4.jpg",
    },
     {
      id: 2,
      link: "#",
      episode: "11/98",
      views: 9149,
      title: "Boruto: Naruto Next Generations",
      thumbnail: "https://preview.colorlib.com/theme/anime/img/trending/trend-1.jpg",
    },
    {
      id: 3,
      link: "#",
      episode: "9/12",
      views: 7452,
      title: "Jujutsu Kaisen",
      thumbnail: "https://preview.colorlib.com/theme/anime/img/sidebar/tv-2.jpg",
    },
  ],
  Years: [
    {
      id: 1,
      link: "#",
      episode: "220/220",
      views: 50000,
      title: "Naruto Shippuden",
      thumbnail: "https://preview.colorlib.com/theme/anime/img/trending/trend-3.jpg",
    },
    {
      id: 2,
      link: "#",
      episode: "220/220",
      views: 50000,
      title: "Naruto Shippuden",
      thumbnail: "https://preview.colorlib.com/theme/anime/img/sidebar/tv-3.jpg",
    },
  ],
};




const TopViewSection = () => {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("Day");
  const data = mockTopViewData[activeFilter];

  return (
    <section className="mb-6">
      <SectionHeading
        title="TOP VIEWS"
        size="small"
        filters={["Day", "Week", "Month", "Years"]}
        activeFilter={activeFilter}
        onFilterChange={(filter: string) => setActiveFilter(filter as FilterOption)}
      />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-3 mb-6"
        >
          {data.map((movie) => (
            <HorizonCard
              key={movie.id}
              link={movie.link}
              episode={movie.episode}
              views={movie.views}
              title={movie.title}
              thumbnail={movie.thumbnail}
            />
          ))}
        </motion.div>
      </AnimatePresence>

    </section>
  );
};

export default TopViewSection;
