import React from "react";

interface EpisodeButtonProps {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
}

const EpisodeButton: React.FC<EpisodeButtonProps> = ({ label, onClick, isActive }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1 rounded-md text-lg font-medium shadow transition
      ${isActive 
        ? "bg-red-500 text-white"  // màu khi active
        : "bg-[#39395a] text-white hover:bg-[#2c2c45]"}`}
  >
    {label}
  </button>
);

export default EpisodeButton;
