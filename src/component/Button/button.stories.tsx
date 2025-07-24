
import ButtonFollow from "../Button/buttonFollow";
import ButtonReview from "../Button/buttonReview";
import ButtonWatchnow from "../Button/buttonWatchnow";
import EpisodeButton from "../Button/buttonEpisodes";
import AvatarCircle from "./buttonAvatar";
import InputComment from "../Input/InputComment";
import type { Meta, StoryObj } from "@storybook/react";
import AnimeBanner from "../../modules/AnimeWatching/component/VideoWatching";
import CommentCard from "../Card/commentCard";
const meta: Meta = {
  title: "Components/Button",
  tags: ["autodocs"],
};

export default meta;

export const Follow: StoryObj = {
  render: (args) => <ButtonFollow {...args} />,
};

export const Banner: StoryObj = {
  render: (args) => (
    <AnimeBanner
      src="https://dragonballwiki.net/xemphim/wp-content/uploads/2017/06/Wiki-background.jpg"
      {...args}
    />
  ),
};

export const Comment: StoryObj = {
  render: (args) => (
    <CommentCard
      username="Chris Curry"
      time="1 Hour ago"
      content={`whachikan Just noticed that someone categorized this as belonging to the genre "demons"\nLOL`}
      {...args}
    />
  ),
};
export const Review: StoryObj = {
  render: (args) => <ButtonReview {...args} />,
};


export const Watchnow: StoryObj = {
  render: (args) => <ButtonWatchnow {...args} />,
};

export const Episode: StoryObj = {
  render: (args) => <EpisodeButton label="Ep 01" {...args} />,
};

export const Avatar: StoryObj = {
  render: (args) => (
    <AvatarCircle
      src="https://i.imgur.com/your-avatar.jpg"
      size={60}
      {...args}
    />
  ),
};

export const CommentInput: StoryObj = {
  render: (args) => <InputComment {...args} />,
};