import React from "react";

interface AvatarCircleProps {
  src?: string;
  username: string;
  size?: number;
}

const AvatarCircle: React.FC<AvatarCircleProps> = ({ src, username, size = 40 }) => {
  const initials = username
    ? username
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "?";

  return (
    <div
      className="flex items-center justify-center rounded-full bg-blue-500 text-white font-bold"
      style={{ width: size, height: size, fontSize: size / 3 }}
    >
      {src ? (
        <img
          src={src}
          alt={username}
          className="w-full h-full rounded-full object-cover"
        />
      ) : (
        initials
      )}
    </div>
  );
};

export default AvatarCircle;
