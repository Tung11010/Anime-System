// src/modules/AnimeDetail/AnimeDetail.tsx
import React from 'react';
import SectionAnimeInfo from '../component/SectionAnimeInfo';
import SectionComment from '../component/SectionComment';

const AnimeDetail: React.FC = () => {
  return (
    <div className="bg-[#0c0921]">
      <SectionAnimeInfo />
      <SectionComment />
    </div>
  );
};

export default AnimeDetail;
