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
      <span>{time}</span>
    </CardHeader>
    <CardContent>{content}</CardContent>
  </CardWrapper>
);

export default CommentCard;
