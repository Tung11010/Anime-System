import React, { useState } from "react";
import AnimeBanner from "./component/VideoWatching";
import EpisodeButton from "../../component/Button/buttonEpisodes";
import AvatarCircle from "../../component/Button/buttonAvatar";
import CommentCard from "../../component/Card/commentCard";
import InputComment from "../../component/Input/InputComment";
import ButtonReview from "../../component/Button/buttonReview";

const episodes = Array.from({ length: 19 }, (_, i) => `Ep ${String(i + 1).padStart(2, "0")}`);

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

const AnimeWatching: React.FC = () => {
    const [comment, setComment] = useState("");

    return (
        <div className="flex justify-center items-center w-full bg-[#101136]">
            <div>
                <AnimeBanner src="https://dragonballwiki.net/xemphim/wp-content/uploads/2017/06/Wiki-background.jpg" />
                <div className="px-7  ">
                    <span className="text-white font-extrabold text-l tracking-wide uppercase">
                        List Name
                    </span>
                </div>
                <div className="mt-8 px-7">
                    <div className="flex flex-wrap gap-6 mb-6">
                        {episodes.slice(0, 11).map((label) => (
                            <EpisodeButton key={label} label={label} />
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-6">
                        {episodes.slice(11).map((label) => (
                            <EpisodeButton key={label} label={label} />
                        ))}
                    </div>
                </div>
                <div className="px-7 mt-12">
                    <span className="text-white font-extrabold text-l tracking-wide uppercase">
                        Reviews
                    </span>
                </div>
                {/* Comment List */}
                <div className="mt-12 flex flex-col gap-6 px-7 pb-10">
                    {comments.map((c, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                            <AvatarCircle src={c.avatar} size={56} />
                            <CommentCard username={c.username} time={c.time} content={c.content} />
                        </div>
                    ))}
                </div>
                <div className="px-7 pt-2 pb-3">
                    <span className="text-white font-extrabold text-l tracking-wide uppercase">
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
            </div>
        </div>
    );
};

export default AnimeWatching;
