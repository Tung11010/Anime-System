import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

export interface HorizonCardProps {
  thumbnail: string;
  episode: number;
  views: number;
  title: string;
  slug: string;
}

const HorizonCard = ({
  thumbnail,
  episode,
  views,
  title,
  slug,
}: HorizonCardProps) => {
  return (
    <div className="relative w-[280px] h-[140px] mt-2 rounded-md overflow-hidden transition-transform duration-2000 hover:-translate-y-1.5 hover:shadow-2xl">
      {/* Image + overlay được bọc bằng Link */}
    <Link to={`/movie-detail/${slug}`}>
    
       <img
        src={thumbnail}
        alt={title}
        className="w-full h-full object-cover object-[0%_30%]"
      />

      <div className="absolute top-[6%] left-0 w-full flex justify-between px-3">
        <div className="bg-red-600 text-white text-xs px-2 py-[1px] rounded">
          {episode}/{episode}
        </div>
        <div className="bg-gray-700 text-white text-xs px-2 py-[1px] rounded flex items-center gap-1">
          <Eye size={11} />
          {views.toLocaleString()}
        </div>
      </div>
    </Link>

      {/* Description không nằm trong Link */}
      <div className="absolute bottom-0 left-0 w-full px-2 pb-2 pt-10 bg-gradient-to-t from-black/60 to-transparent text-white font-bold text-[0.9rem] z-10">
        {title}
      </div>
    </div>
  );
};

export default HorizonCard;
