import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

export interface MiniVerticalCardProps {
  thumbnail: string;
  title: string;
  views: number;
  link: string; // thêm prop link
}

const MiniVerticalCard = ({
  thumbnail,
  title,
  views,
  link,
}: MiniVerticalCardProps) => {
  return (
    <Link to={link} className="flex items-center gap-4 text-white w-full">
      {/* Thumbnail */}
      <img
        src={thumbnail}
        alt={title}
        className="w-[78px] h-[110px] object-cover"
      />

      {/* Content */}
      <div className="flex flex-col justify-center gap-1">
        {/* Labels */}
        <div className="flex gap-2">
          <div className="bg-gray-700 text-[8px] px-2 py-[1px] rounded-lg">Active</div>
          <div className="bg-gray-700 text-[8px] px-2 py-[1px] rounded-lg">Movie</div>
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
