// VerticalCard.tsx
import { Eye, MessageCircle, Play } from "lucide-react";
import { Link } from "react-router-dom";

export interface VerticalCardProps {
  slug: string;
  thumbnail: string;
  episode?: number;
  comments?: number;
  views?: number;
  title: string;
}

const VerticalCard = ({
  slug,
  thumbnail,
  episode,
  comments,
  views,
  title,
}: VerticalCardProps) => {
  return (
    <Link
      to={`/movie-detail/${slug}`}
      className="block cursor-pointer text-white w-[165px] z-0"
    >
      {/* Container ảnh và overlay */}
      <div className="relative w-[165px] h-[238px] mt-2 rounded overflow-hidden group">
        {/* Episode badge */}
        {episode && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-[11px] px-3 py-[1px] rounded w-fit z-10">
            {episode}/{episode}
          </div>
        )}

        {/* Thumbnail */}
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition group-hover:brightness-50"
        />

        {/* Nút Play */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-black/50 border-[1.5px] border-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition z-10">
            <Play size={28} className="text-white" />
          </div>
        </div>

        {/* Overlay icons */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex justify-between gap-[3.5rem] text-white text-[9px] z-10">
          {typeof comments !== "undefined" && (
            <div className="bg-[#3d3d3d] text-[11px] px-1.5 py-[1px] rounded flex items-center gap-1">
              <MessageCircle size={11} className="stroke-white fill-white" />{" "}
              {comments}
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
      <div className="flex mt-5 px-0 gap-1">
        <div className="bg-gray-700 text-[8px] px-2 py-[1px] rounded-lg">
          Active
        </div>
        <div className="bg-gray-700 text-[8px] px-2 py-[1px] rounded-lg">
          Movie
        </div>
      </div>

      {/* Title */}
      <p className="mt-3 text-white text-[13px] font-[600] ">{title}</p>
    </Link>
  );
};

export default VerticalCard;
