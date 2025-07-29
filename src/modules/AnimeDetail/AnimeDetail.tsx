// src/modules/AnimeDetail/AnimeDetail.tsx
import React, { useState } from 'react'; // ✅ Thêm useState
import AnimeDetailInfo from './component/AnimeDetailInfo';
import { ButtonFollow, ButtonWatchNow } from '../../components/Button';
import { CommentCard } from '../../components/Card';
import AvatarCircle from '../../components/Button/buttonAvatar'; // ✅ Nếu AvatarCircle là custom component
import InputComment from '../../components/Input/InputComment';
import ButtonReview from '../../components/Button/buttonReview';

const comments = [
  {
    avatar: "https://i.pravatar.cc/48?img=1",
    username: "Chris Curry",
    time: "1 Hour ago",
    content: 'whachikan Just noticed that someone categorized this as belonging to the genre "demons" LOL',
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
  {
    avatar: "https://i.pravatar.cc/48?img=4",
    username: "Chris Curry",
    time: "1 Hour ago",
    content: 'whachikan Just noticed that someone categorized this as belonging to the genre "demons" LOL',
  },
  {
    avatar: "https://i.pravatar.cc/48?img=5",
    username: "Lewis Mann",
    time: "5 Hour ago",
    content: "Finally it came out ages ago",
  },
  {
    avatar: "https://i.pravatar.cc/48?img=6",
    username: "Louis Tyler",
    time: "20 Hour ago",
    content: "Where is the episode 15 ? Slow update! Tch",
  },
];

const AnimeDetail: React.FC = () => {
  const [comment, setComment] = useState(""); // ✅ Đã có useState

  return (
    <div className='bg-[#0c0921]'>
      <AnimeDetailInfo />

      {/* Nút Follow & WatchNow đẩy lên trên bằng relative top */}
      <div className="flex ml-[28%] gap-4 relative -top-10 z-10">
        <ButtonFollow />
        <ButtonWatchNow />
      </div>
      <div className='ml-[100px]'>
      <div className=" px-7 mt-12">
        <span className="text-white font-extrabold text-xl tracking-wide uppercase">
          Reviews
        </span>
      </div>
      {/* Danh sách bình luận */}
      <div className="mt-12 flex flex-col gap-6 px-7 pb-10">
        {comments.map((c, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <AvatarCircle src={c.avatar} size={56} />
            <CommentCard
              username={c.username}
              time={c.time}
              content={c.content}
            />
          </div>
        ))}
      </div>
      {/* YOUR COMMENT section */}
      <div className="px-7 pt-2 pb-3">
        <span className="text-white font-extrabold text-xl tracking-wide uppercase">
          YOUR COMMENT
        </span>
      </div>
      {/* Comment Input Section */}
      <div className="px-7 pb-12">
        <InputComment
          value={comment}
          onChange={e => setComment(e.target.value)}
          placeholder="Your Comment"
        />
        <div className="mt-6">
          <ButtonReview />
        </div>
      </div>

      {/* Các phần khác */}
    </div>
    </div>
  );
};

export default AnimeDetail;
