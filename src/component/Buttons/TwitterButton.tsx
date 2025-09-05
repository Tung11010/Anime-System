import React from "react";

interface TwitterButtonProps {
  onClick?: () => void;
  className?: string;
  text?: string;
}

const TwitterButton: React.FC<TwitterButtonProps> = ({ onClick, className = "", text = "SIGN IN WITH TWITTER" }) => (
  <button
    onClick={onClick}
    className={`bg-[#1da1f2] text-white font-semibold text-base tracking-widest px-12 py-4 rounded-none shadow-none outline-none block mx-auto flex items-center justify-center gap-4 ${className}`}
    style={{ letterSpacing: "0.2em" }}
  >
    {/* Twitter Icon SVG */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="white"
      viewBox="0 0 24 24"
      className="inline-block"
    >
      <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.72 0-4.924 2.206-4.924 4.924 0 .386.044.763.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.724-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/>
    </svg>
    <span>{text}</span>
  </button>
);

export default TwitterButton;