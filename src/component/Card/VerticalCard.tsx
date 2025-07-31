// VerticalCard.tsx
import { Eye, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export interface VerticalCardProps {
  link: string;
  thumbnail: string;
  episode?: string;
  comments?: number;
  views?: number;
  title: string;
}

const VerticalCard = ({
  link,
  thumbnail,
  episode,
  comments,
  views,
  title,
}: VerticalCardProps) => {
  return (
    <Link to={link} className="block cursor-pointer text-white w-[165px] z-0">
      {/* Container ảnh và overlay */}
      <div className="relative">
        {/* Episode badge */}
        {episode && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-[11px] px-3 py-[1px] rounded w-fit z-10">
            {episode}
          </div>
        )}

        {/* Thumbnail */}
        <img
          src={thumbnail}
          alt={title}
          className="w-[165px] h-[238px] rounded mt-2 object-cover"
        />

        {/* Overlay icons */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex justify-between gap-[3.5rem] text-white text-[9px] z-10">
          {typeof comments !== "undefined" && (
            <div className="bg-[#3d3d3d] text-[11px] px-1.5 py-[1px] rounded flex items-center gap-1">
              <MessageCircle size={11} className="stroke-white fill-white" /> {comments}
            </div>
          )}
          {typeof views !== "undefined" && (
            <div className="bg-[#3d3d3d] text-[11px] px-1.5 py-[1px] rounded flex items-center gap-1">
              <Eye size={11} /> {views}
            </div>
          )}
        </div>
      </div>

      {/* Labels */}
      <div className="flex mt-5 px-0 gap-1 ">
        <div className="bg-gray-700 text-[8px] px-2 py-[1px] rounded-lg">Active</div>
        <div className="bg-gray-700 text-[8px] px-2 py-[1px] rounded-lg">Movie</div>
      </div>

      {/* Title */}
      <p className="mt-3 text-white text-[13px] font-[600] ">{title}</p>
    </Link>
  );
};

export default VerticalCard;
