import { MoveRight } from "lucide-react";

type SectionHeadingProps = {
  title: string;
  size?: "small" | "medium" | "large";
  showViewAll?: boolean;
  filters?: string[]; // ví dụ: ["Day", "Week", "Month", "Year"]
  activeFilter?: string;
  onFilterChange?: (filter: string) => void;
};

const SectionHeading = ({
  title,
  size = "medium",
  showViewAll = false,
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
    <div
      className={`flex items-center justify-between mb-4 ${
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
        <a href="#" className="text-[0.65rem] tracking-wider font-bold text-gray-200 hover:text-white flex items-center">
            VIEW ALL
            <MoveRight size={15} className="ml-2"/>
        </a>
      ) : null}
    </div>
  );
};

export default SectionHeading;
