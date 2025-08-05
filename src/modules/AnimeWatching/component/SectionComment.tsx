// components/SectionComment.tsx
import React, { useEffect, useState } from "react";
import AvatarCircle from "@/components/Button/buttonAvatar";
import { CommentCard } from "@/components/Card";
import InputComment from "@/components/Input/InputComment";
import ButtonReview from "@/components/Button/buttonReview";

interface CommentType {
  avatar: string;
  username: string;
  time: string;
  content: string;
}

const SectionComment: React.FC = () => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    // Giả lập fetch comment
    const fetchComments = async () => {
      const data: CommentType[] = [
        {
          avatar: "https://i.pravatar.cc/48?img=1",
          username: "Chris Curry",
          time: "1 Hour ago",
          content:
            'whachikan Just noticed that someone categorized this as belonging to the genre "demons" LOL',
        },
        {
          avatar: "https://i.pravatar.cc/48?img=2",
          username: "Lewis Mann",
          time: "5 Hour ago",
          content: "Finally it came out ages ago",
        },
        {
          avatar: "https://i.pravatar.cc/48?img=3",
          username: "Louis Tyler",
          time: "20 Hour ago",
          content: "Where is the episode 15 ? Slow update! Tch",
        },
      ];
      setComments(data);
    };

    fetchComments();
  }, []);

  return (
    <>
    
      <div className="px-7 mt-12">
        <span className="text-white font-extrabold text-l tracking-wide uppercase">Reviews</span>
      </div>
      <div className="mt-12 flex flex-col gap-6 px-7 pb-10">
        {comments.map((c, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <AvatarCircle src={c.avatar} size={56} />
            <CommentCard username={c.username} time={c.time} content={c.content} />
          </div>
        ))}
      </div>

      <div className="px-7 pt-2 pb-3">
        <span className="text-white font-extrabold text-l tracking-wide uppercase">Your Comment</span>
      </div>
      <div className="px-7 pb-12">
        <InputComment value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Your Comment" />
        <div className="mt-6">
          <ButtonReview />
        </div>
      </div>
    </>
  );
};

export default SectionComment;
