import { HorizonCard } from "@/components/Card";
import { SectionHeading } from "@/components/Section";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTopViews } from "../QueryHooks";

// Define exact keys for filter

type FilterOption = "Day" | "Week" | "Month" | "Years";

const periodMap: Record<FilterOption, 'day' | 'week' | 'month' | 'year'> = {
  Day: 'day',
  Week: 'week',
  Month: 'month',
  Years: 'year',
};




const TopViewSection = () => {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("Day");

  const { data: movies = []} = useTopViews(periodMap[activeFilter]);

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
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-3 mb-6"
        >
          {movies.map((movie) => (
            <HorizonCard
              key={movie.id}
              slug={movie.slug}
              episode={Number(movie.episodesCount ?? 0)}
              views={movie.viewsCount}
              title={movie.title}
              thumbnail={movie.img_url}
            />
          ))}
        </motion.div>
      </AnimatePresence>

    </section>
  );
};

export default TopViewSection;
