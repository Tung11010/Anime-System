import React from "react";
import { CardWrapper, CardHeader, CardContent } from "./styled";

interface CommentCardProps {
  username: string;
  time: string;
  content: string;
}

const CommentCard: React.FC<CommentCardProps> = ({ username, time, content }) => (
  <CardWrapper>
    <CardHeader>
      <span>{username}</span>
      <span className="mx-1">-</span>
      <span className="font-light text-[#bdbdbd] ">{time}</span>
    </CardHeader>
    <CardContent>{content}</CardContent>
  </CardWrapper>
);

export default CommentCard;
