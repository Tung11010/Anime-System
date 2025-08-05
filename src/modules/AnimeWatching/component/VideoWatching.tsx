import React from "react";

interface AnimeBannerProps {
  src: string;
  alt?: string;
  className?: string;
}

const AnimeBanner: React.FC<AnimeBannerProps> = ({
  src,
  alt = "Anime Banner",
  className = "",
}) => (
  <div className="flex justify-center items-center bg-[#101136] w-full min-h-[600px]">
    <img
      src={src}
      alt={alt}
      className={`rounded-lg w-[1000px] max-h-[80vh] object-cover ${className}`}
    />
  </div>
);

export default AnimeBanner;