// components/SectionEpisode.tsx
import React, { useEffect, useState } from "react";
import AnimeBanner from "./VideoWatching";
import EpisodeButton from "@/components/Button/buttonEpisodes";

const SectionEpisode: React.FC = () => {
  const [episodes, setEpisodes] = useState<string[]>([]);

  useEffect(() => {
    // Giả lập fetch API
    const fetchEpisodes = async () => {
      const data = Array.from({ length: 19 }, (_, i) => `Ep ${String(i + 1).padStart(2, "0")}`);
      setEpisodes(data);
    };

    fetchEpisodes();
  }, []);

  return (
    <>
      <AnimeBanner src="https://dragonballwiki.net/xemphim/wp-content/uploads/2017/06/Wiki-background.jpg" />
      <div className="px-7">
        <span className="text-white font-extrabold text-l tracking-wide uppercase">List Name</span>
      </div>
      <div className="mt-8 px-7">
        <div className="flex flex-wrap gap-6 mb-6">
          {episodes.slice(0, 11).map((label) => (
            <EpisodeButton key={label} label={label} />
          ))}
        </div>
        <div className="flex flex-wrap gap-6">
          {episodes.slice(11).map((label) => (
            <EpisodeButton key={label} label={label} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionEpisode;
