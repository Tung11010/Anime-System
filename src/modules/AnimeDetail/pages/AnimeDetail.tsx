// src/modules/AnimeDetail/AnimeDetail.tsx
import React from 'react';
import SectionAnimeInfo from '../component/SectionAnimeInfo';
import SectionComment from '../component/SectionComment';

const AnimeDetail: React.FC = () => {
  return (
    <div className="bg-[rgb(3,3,43)]">
      <SectionAnimeInfo />
      <SectionComment />
    </div>
  );
};

export default AnimeDetail;
