import React from 'react';
import { FaComment, FaEye, FaStar, FaStarHalf } from 'react-icons/fa';

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
  duration?: string;
  rating?: string;
  source?: string;
  episodes?: string;
  producers?: string;
}

interface AnimeDetailsProps {
  animeInfo: AnimeInfoType | null;
}

const AnimeDetails: React.FC<AnimeDetailsProps> = ({ animeInfo }) => {
  if (!animeInfo) return <div className="text-white p-10">Loading...</div>;

  return (
    <div className="w-full p-10 flex flex-col items-center bg-[#0c0921]">
      <div className="w-full flex gap-12 justify-center">
        <div className="ml-20 flex gap-12 w-full max-w-[calc(100%-80px)]">
          {/* Poster Section */}
          <div className="relative w-60 min-w-60 bg-[#181a36] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex flex-col items-center h-auto">
            <img
              src={animeInfo.image}
              alt="Poster"
              className="w-full h-auto rounded-2xl object-cover max-h-[500px]"
            />
            <div className="flex justify-between w-[90%] my-3">
              <div className="bg-[#23244a] rounded-lg px-2.5 py-1 flex items-center gap-1 text-sm">
                <FaComment />
                <span className="text-white">11</span>
              </div>
              <div className="bg-[#23244a] rounded-lg px-2.5 py-1 flex items-center gap-1 text-sm">
                <FaEye />
                <span className="text-white">9191</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 flex flex-col justify-start">
            <div className="flex items-center mb-10 space-x-7">
              <h1 className="text-3xl font-bold text-white">{animeInfo.title}</h1>
              <div className="flex items-center gap-1 text-[#ffb400] text-[22px]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>
              <div className="text-base text-[#ccc] ml-2">1.029 Votes</div>
            </div>
            <div className="text-sm text-[#bdbdbd] mb-4">フェイト／ステイナイト, Feito / sutei naito</div>
            <div className="text-base text-[#e0e0e0] mb-6 leading-relaxed w-full max-w-[800px]">
              {animeInfo.description}
            </div>
            <div className="flex justify-start mb-6">
              <div className="grid grid-cols-2 gap-x-20">
                <ul className="list-none p-0 m-0">
                  <li className="text-[15px] mb-2">
                    <span className="text-[#bdbdbd] inline-block min-w-[100px]">Type:</span>
                    <span className="text-white">{animeInfo.type || 'TV Series'}</span>
                  </li>
                  <li className="text-[15px] mb-2">
                    <span className="text-[#bdbdbd] inline-block min-w-[100px]">Studios:</span>
                    <span className="text-white">{animeInfo.studios || 'Lerche'}</span>
                  </li>
                  <li className="text-[15px] mb-2">
                    <span className="text-[#bdbdbd] inline-block min-w-[100px]">Date aired:</span>
                    <span className="text-white">{animeInfo.dateAired || 'Oct 02, 2019 to ?'}</span>
                  </li>
                  <li className="text-[15px] mb-2">
                    <span className="text-[#bdbdbd] inline-block min-w-[100px]">Status:</span>
                    <span className="text-white">{animeInfo.status || 'Airing'}</span>
                  </li>
                  <li className="text-[15px] mb-2">
                    <span className="text-[#bdbdbd] inline-block min-w-[100px]">Genre:</span>
                    <span className="text-white">{animeInfo.genre || 'Action, Adventure, Fantasy, Magic'}</span>
                  </li>
                </ul>

                <ul className="list-none p-0 m-0">
                  <li className="text-[15px] mb-2">
                    <span className="text-[#bdbdbd] inline-block min-w-[100px]">Duration:</span>
                    <span className="text-white">{animeInfo.duration || '24 min per ep'}</span>
                  </li>
                  <li className="text-[15px] mb-2">
                    <span className="text-[#bdbdbd] inline-block min-w-[100px]">Rating:</span>
                    <span className="text-white">{animeInfo.rating || 'PG-13'}</span>
                  </li>
                  <li className="text-[15px] mb-2">
                    <span className="text-[#bdbdbd] inline-block min-w-[100px]">Source:</span>
                    <span className="text-white">{animeInfo.source || 'Manga'}</span>
                  </li>
                  <li className="text-[15px] mb-2">
                    <span className="text-[#bdbdbd] inline-block min-w-[100px]">Episodes:</span>
                    <span className="text-white">{animeInfo.episodes || '12'}</span>
                  </li>
                  <li className="text-[15px] mb-2">
                    <span className="text-[#bdbdbd] inline-block min-w-[100px]">Producers:</span>
                    <span className="text-white">{animeInfo.producers || 'Aniplex'}</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetails;
