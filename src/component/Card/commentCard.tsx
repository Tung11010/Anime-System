import React from "react";

interface CommentCardProps {
  username: string;
  time: string;
  content: string;
}

const CommentCard: React.FC<CommentCardProps> = ({ username, time, content }) => (
  <div className="bg-[#232347] rounded-md p-4 text-white w-full max-w-xl">
    <div className="mb-1">
      <span className="font-semibold">{username}</span>
      <span className="mx-2 text-gray-400">-</span>
      <span className="text-gray-400 text-sm">{time}</span>
    </div>
    <div className="text-gray-200">{content}</div>
  </div>
);

export default CommentCard;