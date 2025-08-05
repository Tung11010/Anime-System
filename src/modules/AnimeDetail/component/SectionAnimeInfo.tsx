import React, { useEffect, useState } from 'react';
import AnimeDetails from './AnimeDetailInfo';
import { ButtonFollow, ButtonWatchNow } from '../../../components/Button';

interface AnimeInfoType {
  id: number;
  title: string;
  description: string;
  image: string;
  type?: string;
  studios?: string;
  dateAired?: string;
  status?: string;
  genre?: string;
}

const SectionAnimeInfo: React.FC = () => {
  const [animeInfo, setAnimeInfo] = useState<AnimeInfoType | null>(null);

  useEffect(() => {
    const fetchAnimeInfo = async () => {
      setAnimeInfo({
        id: 1,
        title: 'Fate Stay Night: Unlimited Blade',
        description:
          'In the mystical world of Alcia, every human is born with a mysterious number inscribed somewhere on their body—a "Count" that defines their very existence. This enigmatic figure, varying from person to person, is not just a mere tattoo or decoration. It governs fate, reflects purpose, and dictates social standing.',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRaRFVBKcsgX70ImxWwBXr9YEDbHO-iY1bBA&s',
        type: 'TV Series',
        studios: 'Lerche',
        dateAired: 'Oct 02, 2019 to ?',
        status: 'Airing',
        genre: 'Action, Adventure, Fantasy, Magic',
      });
    };

    fetchAnimeInfo();
  }, []);

  return (
    <div className="relative z-10 bg-[#0c0921]">
      <AnimeDetails animeInfo={animeInfo} />
      <div className="flex ml-[28%] gap-4 relative -top-10 z-10">
        <ButtonFollow />
        <ButtonWatchNow />
      </div>
    </div>
  );
};

export default SectionAnimeInfo;
