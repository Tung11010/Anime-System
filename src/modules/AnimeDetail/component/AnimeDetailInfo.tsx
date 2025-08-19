import React from 'react';
import { FaComment, FaEye, FaStar, FaStarHalf } from 'react-icons/fa';

interface AnimeInfoType {
  id: number;
  title: string;
  description: string;
  img_url: string;
  type?: string;
  studio?: string;
  dateAired?: string;
  status?: string;
  genres?: [];
  duration?: string;
  rating?: string;
  episodes?: string;
  producers?: string;
  score?: string;
  quality?: string;
  totalViews?: string;
  totalComments?: string;
}

interface AnimeDetailsProps {
  animeInfo: AnimeInfoType | null;
}

const AnimeDetails: React.FC<AnimeDetailsProps> = ({ animeInfo }) => {
  if (!animeInfo) return <div className="text-white p-10">Loading...</div>;

  return (
    <div className="w-full p-10 flex flex-col items-center">
      <div className="w-full flex gap-12 justify-center">
        <div className="ml-20 flex gap-12 w-full max-w-[calc(100%-80px)]">
          {/* Poster Section */}
         <div className="w-60 min-w-60 overflow-hidden flex flex-col items-center shadow-2xl">
          {/* Bọc ảnh và icon vào 1 div.relative */}
          <div className="relative w-full">
            <img
              src={animeInfo.img_url}
              alt="Poster"
              className="w-full rounded-md object-cover h-[25rem]" 
            />
            <div className="flex justify-between w-[90%] absolute bottom-4 left-1/2 -translate-x-1/2">
              <div className="bg-[#3d3d3d] rounded-[0.25rem] shadow-lg px-2.5 flex items-center gap-1 text-sm">
                <FaComment color={'white'} />
                <span className="text-white">{animeInfo.totalComments}</span>
              </div>
              <div className="bg-[#3d3d3d] rounded-[0.25rem] shadow-lg px-2.5 flex items-center gap-1 text-sm">
                <FaEye color="white" />
                <span className="text-white">{animeInfo.totalViews}</span>
              </div>
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
                    <span className="text-white">{animeInfo.type || 'Null'}</span>
                  </li>
                  <li className="text-[15px] mb-2">
                    <span className="text-[#bdbdbd] inline-block min-w-[100px]">Studios:</span>
                    <span className="text-white">{animeInfo.studio || 'Null'}</span>
                  </li>
                  <li className="text-[15px] mb-2">
                    <span className="text-[#bdbdbd] inline-block min-w-[100px]">Date aired:</span>
                    <span className="text-white">{animeInfo.dateAired || 'Oct 02, 2019 to ?'}</span>
                  </li>
                  <li className="text-[15px] mb-2">
                    <span className="text-[#bdbdbd] inline-block min-w-[100px]">Status:</span>
                    <span className="text-white">{animeInfo.status || 'Null'}</span>
                  </li>
                  <li className="text-[15px] mb-2">
                    <span className="text-[#bdbdbd] inline-block min-w-[100px]">Genre:</span>
                    <span className="text-white">{animeInfo.genres?.join(', ') || 'Action, Adventure, Fantasy, Magic'}</span>
                  </li>
                </ul>

                <ul className="list-none p-0 m-0">
                  <li className="text-[15px] mb-2">
                    <span className="text-[#bdbdbd] inline-block min-w-[100px]">Score:</span>
                    <span className="text-white">{animeInfo.score || 'null'}</span>
                  </li>
                  <li className="text-[15px] mb-2">
                    <span className="text-[#bdbdbd] inline-block min-w-[100px]">Rating:</span>
                    <span className="text-white">{animeInfo.rating || ''}</span>
                  </li>
                  <li className="text-[15px] mb-2">
                    <span className="text-[#bdbdbd] inline-block min-w-[100px]">Duration:</span>
                    <span className="text-white">{animeInfo.duration|| ''}</span>
                  </li>
                  <li className="text-[15px] mb-2">
                    <span className="text-[#bdbdbd] inline-block min-w-[100px]">Quality:</span>
                    <span className="text-white">{animeInfo.quality || '12'}</span>
                  </li>
                  <li className="text-[15px] mb-2">
                    <span className="text-[#bdbdbd] inline-block min-w-[100px]">Views:</span>
                    <span className="text-white">{animeInfo.totalViews}</span>
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
