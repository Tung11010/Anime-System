import React, { useState, useEffect, useMemo } from "react";
import VideoWatching from "./VideoWatching";
import EpisodeButton from "@/components/Button/buttonEpisodes";
import { useParams } from "react-router-dom";
import { useMovieWatchingSlug } from "../QueryHooks";
import { Episode } from "../types";

const SectionEpisode: React.FC = () => {
  const { slug } = useParams();
  const { data } = useMovieWatchingSlug(slug || "");


  const [selectedEpisode, setSelectedEpisode] = useState<number | null>(null); 
  const episodes = useMemo(() => data?.episodes ?? [], [data?.episodes]);
  // Khi dữ liệu về, mặc định chọn tập 1
  useEffect(() => {
    if (episodes.length > 0 && selectedEpisode === null) {
      setSelectedEpisode(episodes[0].id);
    }
  }, [episodes, selectedEpisode]);

  // Lấy URL video của tập đang chọn
  const currentEpisode = episodes.find((ep: Episode) => ep.id === selectedEpisode);
  const videoUrl = currentEpisode?.video_url || "";

  return (
    <>
      {/* Video */}
      <VideoWatching src={videoUrl} />

      {/* Tiêu đề */}
      <div className="px-7 mt-5">
        <span className="text-white font-extrabold text-l tracking-wide uppercase">
          List Name
        </span>
      </div>

      {/* Danh sách tập */}
      <div className="mt-8 px-7">
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-6 mb-6">
          {episodes.map((episode: Episode) => {
            return (
              <EpisodeButton
                key={episode.id}
                label={episode.episode_no}
                onClick={() => setSelectedEpisode(episode.id)}
                isActive={episode.id === selectedEpisode}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SectionEpisode;
