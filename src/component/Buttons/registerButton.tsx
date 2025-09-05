import React from "react";

interface RegisterButtonProps {
  onClick?: () => void;
}

const RegisterButton: React.FC<RegisterButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="
      bg-[#e84141]
      text-white
      font-semibold
      text-base
      tracking-widest
      px-12
      py-4
      rounded-none
      shadow-none
      outline-none
      block
      mx-auto
    "
    style={{ letterSpacing: "0.2em" }} // Tailwind tracking-widest chưa đủ, thêm inline style cho sát mẫu
  >
    REGISTER NOW
  </button>
);

export default RegisterButton;