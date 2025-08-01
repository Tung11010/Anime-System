import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

type SectionHeadingProps = {
  title: string;
  size?: "small" | "medium" | "large";
  showViewAll?: boolean;
  showOrderBy?: boolean;
  viewAllLink?: string;
  filters?: string[]; // ví dụ: ["Day", "Week", "Month", "Year"]
  activeFilter?: string;
  onFilterChange?: (filter: string) => void;
};

const SectionHeading = ({
  title,
  size = "medium",
  showViewAll = false,
  showOrderBy = false,
  viewAllLink,
  filters,
  activeFilter,
  onFilterChange,
} : SectionHeadingProps) => {
  const textSizeClass =
    size === "small"
      ? "text-sm"
      : size === "large"
      ? "text-[1.1rem]"
      : "text-base";

 return (
  <div className="w-full">
    <div
      className={`flex items-center justify-between mb-5 ${
        filters && filters.length > 0 ? "w-[18rem]" : showViewAll ? "w-[33rem]" : "w-auto"
      }`}
    >
      <div className="flex items-center">
        <div className="w-[3px] h-[28px] mr-3 bg-red-600" />
        <h2 className={`text-white font-oswald font-bold tracking-wider ${textSizeClass}`}>{title}</h2>
      </div>

      {filters && filters.length > 0 ? (
        <div className="flex items-center text-[0.65rem] text-white">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => onFilterChange?.(filter)}
              className={`px-1 py-1 rounded ${
                activeFilter === filter ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      ) : showViewAll ? (
        <Link
          to={viewAllLink || "#"}
          className="text-[0.65rem] tracking-wider font-bold text-gray-200 hover:text-white flex items-center"
        >
          VIEW ALL
          <MoveRight size={15} className="ml-2" />
        </Link>
      ) : showOrderBy ? (
        <div className="flex gap-3">
          <span className="text-white text-xs mt-1">Order by:</span>
          <select
            className="text-xs px-3 py-1 rounded-sm bg-white text-black border border-gray-600 focus:outline-none"
            name=""
            id=""
          >
            <option value="">A-Z</option>
            <option value="">Z-A</option>
            <option value="">Newest</option>
            <option value="">Oldest</option>
          </select>
        </div>
      ) : null}
    </div>
    {showOrderBy && <div className="w-full h-[1px] bg-white opacity-20" />}
  </div>
);

};

export default SectionHeading;
