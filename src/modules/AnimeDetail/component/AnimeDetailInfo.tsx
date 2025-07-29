import React from 'react';
import { FaComment, FaEye, FaStar, FaStarHalf, FaHeart, FaArrowRight } from 'react-icons/fa';

const AnimeDetails: React.FC = () => {
  return (
    <div className="w-full p-10 flex flex-col items-center bg-[#0c0921]">
      <div className="w-full flex gap-12 justify-center">
        {/* Poster và Content Section (thụt vào bên trái) */}
        <div className="ml-20 flex gap-12 w-full max-w-[calc(100%-80px)]">
          {/* Poster Section */}
          <div className="relative w-60 min-w-60 bg-[#181a36] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex flex-col items-center h-auto">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRaRFVBKcsgX70ImxWwBXr9YEDbHO-iY1bBA&s"
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
              <h1 className="text-3xl font-bold text-white">Fate Stay Night: Unlimited Blade</h1>
              <div className="flex items-center gap-1 text-[#ffb400] text-[22px]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>
              <div className="text-base text-[#ccc] ml-2">1.029 Votes</div>
            </div>
            <div className="text-sm text-[#bdbdbd] mb-4">
              フェイト／ステイナイト, Feito / sutei naito
            </div>
            <div className="text-base text-[#e0e0e0] mb-6 leading-relaxed w-full max-w-[800px]">
              Every human inhabiting the world of Alcia is branded by a "Count" or a number written on their body. For
              Hina's mother, her total drops to 0 and she's pulled into the Abyss, never to be seen again. But her mother's
              last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!
            </div>
            <div className="flex gap-10 mb-6">
              <div>
                <ul className="list-none p-0 m-0">
                  <li key="type" className="text-[15px] mb-2">
                    <span className="text-[#bdbdbd] inline-block min-w-[100px]">Type:</span>
                    <span className="text-white">TV Series</span>
                  </li>
                  <li key="studios" className="text-[15px] mb-2">
                    <span className="text-[#bdbdbd] inline-block min-w-[100px]">Studios:</span>
                    <span className="text-white">Lerche</span>
                  </li>
                  <li key="date" className="text-[15px] mb-2">
                    <span className="text-[#bdbdbd] inline-block min-w-[100px]">Date aired:</span>
                    <span className="text-white">Oct 02, 2019 to ?</span>
                  </li>
                  <li key="status" className="text-[15px] mb-2">
                    <span className="text-[#bdbdbd] inline-block min-w-[100px]">Status:</span>
                    <span className="text-white">Airing</span>
                  </li>
                  <li key="genre" className="text-[15px] mb-2">
                    <span className="text-[#bdbdbd] inline-block min-w-[100px]">Genre:</span>
                    <span className="text-white">Action, Adventure, Fantasy, Magic</span>
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