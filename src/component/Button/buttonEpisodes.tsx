import React from "react";

interface EpisodeButtonProps {
  label: string;
  onClick?: () => void;
}

const EpisodeButton: React.FC<EpisodeButtonProps> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="px-3 py-1 bg-[#39395a] text-white rounded-md text-lg font-medium shadow hover:bg-[#2c2c45] transition"
  >
    {label}
  </button>
);

export default EpisodeButton;