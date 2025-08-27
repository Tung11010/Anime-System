import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import AvatarCircle from '../../../components/Button/buttonAvatar';
import { CommentCard } from '../../../components/Card';
import InputComment from '../../../components/Input/InputComment';
import ButtonReview from '../../../components/Button/buttonReview';
import { Comment } from '../types';
import { RootState } from "@/modules/Auth/store/store";
import { toast } from "react-toastify";
import { useMovieWatchingSlug } from "../QueryHooks";
import { SectionHeading } from "@/components/Section";
import { postComment } from "../services/AnimeWatching.services";

dayjs.extend(relativeTime);

const SectionComment: React.FC = () => {
  const { slug } = useParams();
  const { data } = useMovieWatchingSlug(slug || '');
  const movieId = data?.id;
  

  // Lấy token từ Redux Persist và remove dấu " thừa nếu có
  const tokenRaw = useSelector((state: RootState) => state.auth.accessToken);
  const token = tokenRaw ? tokenRaw.replace(/^"|"$/g, '') : null;
  
  
  

  const [comments, setComments] = useState<Comment[]>([]);
  const [comment, setComment] = useState('');
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    if (data?.comments) {
      setComments(data.comments);
    }
  }, [data?.comments]);

  const handlePostComment = async () => {
    if (!token || !movieId) return toast.error('Please log in to comment.');
    if(!comment.trim()) return toast.error('Please enter a comment before posting')

    try {
      const res = await postComment( movieId, comment);

      // Gán ngay timeAgo = 'just now'
      const newComment = {
        ...res.data,
        timeAgo: "just now",
      };

      setComments(prev => [newComment, ...prev]);
      setComment('');
    } catch (err) {
      console.error("Post comment failed:", err);
    }
  };

  return (
    <div className="">
      {/* Reviews title */}
      <div className="px-7 mt-12">
        <span className="text-white font-extrabold text-xl tracking-wide uppercase">
          <SectionHeading title="Reviews" size="large"/>
        </span>
      </div>

      {/* List comments */}
      <div className="mt-12 flex flex-col gap-6 px-7 pb-10">
        {comments.slice(0, visibleCount).map((c: Comment, idx: number) => (
          <div key={idx} className="flex items-start gap-4">
            <AvatarCircle 
              src={c.user.avatar} 
              username={c.user.username}
              size={56} 
            />
            <CommentCard
              username={c.user.username}
              time={(c.timeAgo ? c.timeAgo.replace(/\(s\)/, "") : dayjs(c.timeAgo).fromNow())}
              content={c.content}
            />
          </div>
        ))}

       {/* Nút Xem thêm */}
        {visibleCount < comments.length && (
          <button
            onClick={() => setVisibleCount(prev => prev + 5)}
            className="self-center mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
          >
            Xem thêm
          </button>
        )}
      </div>

      {/* Input comment */}
      <div className="px-7 pt-2 pb-3">
        <span className="text-white font-extrabold text-xl tracking-wide uppercase">
          <SectionHeading title="Your Comment" size="large"/>
        </span>
      </div>

      <div className="px-7 pb-12">
        <InputComment
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Your Comment"
        />
        <div className="mt-6">
          <ButtonReview onClick={handlePostComment} />
        </div>
      </div>
    </div>
  );
};

export default SectionComment;
