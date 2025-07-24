import { Eye, MessageCircle } from "lucide-react";

const VerticalCard = () => {
  return (
    <a href="#" className="block cursor-pointer text-white w-[165px]">
      {/* Container ảnh và overlay */}
      <div className="relative">
        {/* Episode badge */}
        <div className="absolute top-2 left-2 bg-red-600 text-white text-[11px] px-3 py-[1px] rounded w-fit z-10">
          11/98
        </div>

        {/* Thumbnail */}
        <img
          src="https://i.redd.it/w6541yr1pamb1.jpg"
          alt="Boruto"
          className="w-[165px] h-[238px] rounded mt-2"
        />

        {/* Icons overlay */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex justify-between gap-[4rem] text-white text-[9px] z-10 ">
          <div className="bg-[#3d3d3d] text-[11px] px-1.5 py-[1px] rounded flex items-center gap-1">
            <MessageCircle size={11} /> 11
          </div>
          <div className="bg-[#3d3d3d] text-[11px] px-1.5 py-[1px] rounded flex items-center gap-1">
            <Eye size={11} /> 9149
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="flex mt-2 px-0 gap-1">
        <div className="bg-gray-700 text-[8px] px-2 py-[1px] rounded-lg">Active</div>
        <div className="bg-gray-700 text-[8px] px-2 py-[1px] rounded-lg">Movie</div>
      </div>

      {/* Title */}
      <p className="mt-1 text-white text-[13px] font-[600] px-2">
        Boruto: Naruto Next Generations
      </p>
    </a>
  );
};

export default VerticalCard;