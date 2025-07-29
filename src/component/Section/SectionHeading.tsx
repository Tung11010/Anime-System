type SectionHeadingProps = {
  title: string;
  size?: "small" | "medium" | "large"; // thêm size
};

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, size = "medium" }) => {
  const textSizeClass =
    size === "small"
      ? "text-sm"
      : size === "large"
      ? "text-xl"
      : "text-base";

  return (
    <div className="flex items-center mb-4">
      <div className="w-[3px] h-[28px] mr-3 bg-red-600" />
      <h2 className={`text-white font-bold ${textSizeClass}`}>{title}</h2>
    </div>
  );
};

export default SectionHeading;