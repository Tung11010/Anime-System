import { Eye, Play } from "lucide-react";
import { Link } from "react-router-dom";

export interface MiniVerticalCardProps {
  thumbnail: string;
  title: string;
  views: number;
  slug: string;
}

const MiniVerticalCard = ({
  thumbnail,
  title,
  views,
  slug,
}: MiniVerticalCardProps) => {
  return (
    <Link
      to={`/movie-detail/${slug}`}
      className="flex items-center gap-4 text-white group w-full"
    >
      {/* Thumbnail + Play icon */}
      <div className="relative w-[78px] h-[110px] overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition group-hover:brightness-50"
        />
       <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-9 h-9 rounded-full bg-black/50 border-[1.5px] border-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition z-10">
            <Play size={21} className="text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center gap-2 -mt-10">
        {/* Labels */}
        <div className="flex gap-2">
          <div className="bg-gray-700 text-[8px] px-2 py-[1px] rounded-lg">
            Active
          </div>
          <div className="bg-gray-700 text-[8px] px-2 py-[1px] rounded-lg">
            Movie
          </div>
        </div>

        {/* Title */}
        <p className="text-sm font-semibold leading-tight">{title}</p>

        {/* Views */}
        <div className="flex items-center text-[0.7rem] text-gray-300 mt-1 gap-1">
          <Eye size={14} />
          <span>{views.toLocaleString()} Views</span>
        </div>
      </div>
    </Link>
  );
};

export default MiniVerticalCard;
