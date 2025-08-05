import React from "react";

interface AvatarCircleProps {
  src: string;
  alt?: string;
  size?: number | string;
  onClick?: () => void;
}

const AvatarCircle: React.FC<AvatarCircleProps> = ({
  src,
  alt = "avatar",
  size = 48,
  onClick,
}) => (
  <img
    src={src}
    alt={alt}
    style={{
      width: size,
      height: size,
      objectFit: "cover",
      borderRadius: "50%",
      display: "block",
      cursor: onClick ? "pointer" : "default",
      background: "#101136",
    }}
    onClick={onClick}
  />
);

export default AvatarCircle;