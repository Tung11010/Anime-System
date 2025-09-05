import { Heart } from "lucide-react";

interface ButtonFollowProps {
  isFollowed: boolean;
  onClick?: () => void;
}

const ButtonFollow = ({ isFollowed, onClick }: ButtonFollowProps) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-6 py-2 font-semibold rounded-md shadow transition 
      ${isFollowed ? "bg-red-600 hover:bg-red-700 text-white" : "bg-red-600 hover:bg-red-700 text-white"}`}
  >
    <Heart
      size={15}
      fill={isFollowed ? "currentColor" : "transparent"} // nếu follow thì trái tim đầy
      className="transition"
    />
    {isFollowed ? "UNFOLLOW" : "FOLLOW"}
  </button>
);

export default ButtonFollow;
