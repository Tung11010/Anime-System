import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

export interface HorizonCardProps {
  thumbnail: string;
  episode: string;
  views: number;
  title: string;
  link: string;
}

const HorizonCard = ({
  thumbnail,
  episode,
  views,
  title,
  link,
}: HorizonCardProps) => {
  return (
    <div className="relative w-[280px] h-[135px] mt-2 rounded-md overflow-hidden">
      {/* Image + overlay được bọc bằng Link */}
      <Link to={link}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${thumbnail}')`,
          }}
        >
          {/* Episode + View */}
          <div className="absolute top-[6%] left-0 w-full flex justify-between px-3">
            <div className="bg-red-600 text-white text-xs px-2 py-[1px] rounded">
              {episode}
            </div>
            <div className="bg-gray-700 text-white text-xs px-2 py-[1px] rounded font-semibold flex items-center gap-1">
              <Eye size={11} />
              {views.toLocaleString()}
            </div>
          </div>
        </div>
      </Link>

      {/* Description không nằm trong Link */}
      <div className="absolute bottom-0 left-0 w-full px-2 pb-2 pt-10 bg-gradient-to-t from-black/60 to-transparent text-white font-bold text-[16px] z-10">
        {title}
      </div>
    </div>
  );
};

export default HorizonCard;
