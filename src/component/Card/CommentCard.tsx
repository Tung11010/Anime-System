import { Eye } from "lucide-react";

const CommentCard = () => {
  return (
    <div className="flex rounded-md  gap-4 items-center text-white w-full">
      {/* Thumbnail */}
      <img
        src="https://i.imgur.com/tGbaZCY.jpg"
        alt="The Seven Deadly Sins"
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
        <p className="text-sm font-semibold leading-tight">
          The Seven Deadly Sins: Wrath of the Gods
        </p>

        {/* Views */}
        <div className="flex items-center text-xs text-gray-300 mt-1 gap-1">
          <Eye size={14} />
          <span>19.141 Views</span>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;