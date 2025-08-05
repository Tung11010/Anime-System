// pages/AnimeWatching.tsx
import React from "react";
import SectionEpisode from "../component/SectionEpisode";
import SectionComment from "../component/SectionComment";

const AnimeWatching: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full bg-[#101136]">
      <div>
        <SectionEpisode />
        <SectionComment />
      </div>
    </div>
  );
};

export default AnimeWatching;
