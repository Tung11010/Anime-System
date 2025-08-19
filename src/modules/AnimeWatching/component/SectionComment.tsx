// components/SectionComment.tsx
import React, { useState } from "react";
import AvatarCircle from "@/components/Button/buttonAvatar";
import { CommentCard } from "@/components/Card";
import InputComment from "@/components/Input/InputComment";
import ButtonReview from "@/components/Button/buttonReview";
import { useParams } from "react-router-dom";
import { useMovieWatchingSlug } from "../QueryHooks";


const SectionComment: React.FC = () => {
  const { slug } = useParams();
  const { data } = useMovieWatchingSlug(slug || "");
  const comments = data?.comments ?? [];
  const [comment, setComment] = useState("");
  

  // Số comment hiển thị ban đầu
  const [visibleCount, setVisibleCount] = useState(5);

  // Xử lý khi bấm "Xem thêm"
  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 5); // Mỗi lần +5 comment
  };

  return (
    <>
      <div className="px-7 mt-12">
        <span className="text-white font-extrabold text-l tracking-wide uppercase">
          Reviews
        </span>
      </div>

      {/* Danh sách comment */}
      <div className="mt-12 flex flex-col gap-6 px-7 pb-10">
        {comments.slice(0, visibleCount).map((c: any, idx: number) => (
          <div key={idx} className="flex items-start gap-4">
            <AvatarCircle src={c.user.avatar} size={56} />
            <CommentCard
              username={c.user.username}
              time={c.time}
              content={c.content}
            />
          </div>
        ))}

        {/* Nút Xem thêm */}
        {visibleCount < comments.length && (
          <button
            onClick={handleShowMore}
            className="self-center mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
          >
            Xem thêm
          </button>
        )}
      </div>

      {/* Ô nhập comment */}
      <div className="px-7 pt-2 pb-3">
        <span className="text-white font-extrabold text-l tracking-wide uppercase">
          Your Comment
        </span>
      </div>
      <div className="px-7 pb-12">
        <InputComment
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Your Comment"
        />
        <div className="mt-6">
          <ButtonReview />
        </div>
      </div>
    </>
  );
};

export default SectionComment;
