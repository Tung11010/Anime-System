// src/modules/AnimeDetail/components/SectionAnimeInfo.tsx
import React, { useEffect, useState } from 'react';
import AnimeDetailInfo from '../component/AnimeDetailInfo';
import { ButtonFollow, ButtonWatchNow } from '../../../components/Button';

const SectionAnimeInfo: React.FC = () => {
  const [animeInfo, setAnimeInfo] = useState<any>(null); // optional

  useEffect(() => {
    // Giả lập fetch data từ API
    const fetchAnimeInfo = async () => {
      // const res = await fetch("/api/anime/detail");
      // const data = await res.json();
      setAnimeInfo({ title: "Sample Anime" }); // replace with actual data
    };

    fetchAnimeInfo();
  }, []);

  return (
    <div className="relative z-10 bg-[#0c0921]">
      <AnimeDetailInfo />
      <div className="flex ml-[28%] gap-4 relative -top-10 z-10">
        <ButtonFollow />
        <ButtonWatchNow />
      </div>
    </div>
  );
};

export default SectionAnimeInfo;
