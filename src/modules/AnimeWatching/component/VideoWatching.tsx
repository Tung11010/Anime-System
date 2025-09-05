import React from "react";

interface VideoWatchingProps {
  src: string;
  alt?: string;
  className?: string;
}

const VideoWatching: React.FC<VideoWatchingProps> = ({
  src,
  alt = "Video Watching",
  className = "",
}) => (
  <div className="flex justify-center items-center w-full min-h-[600px]">
    <video
      src={src}
      controls
      autoPlay
      className={`rounded-lg w-[980px] max-h-[82vh] object-cover ${className}`}
    >
      {alt}
    </video>
  </div>
);

export default VideoWatching;
