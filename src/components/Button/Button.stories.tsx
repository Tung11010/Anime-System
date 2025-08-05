
import ButtonFollow from "./buttonFollow";
import ButtonReview from "./buttonReview";
import ButtonWatchNow from "./buttonWatchnow";
import EpisodeButton from "./buttonEpisodes";
import AvatarCircle from "./buttonAvatar";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta = {
  title: "Components/Button",
  tags: ["autodocs"],
};

export default meta;

export const Follow: StoryObj = {
  render: (args) => <ButtonFollow {...args} />,
};

export const Review: StoryObj = {
  render: (args) => <ButtonReview {...args} />,
};

export const Watchnow: StoryObj = {
  render: (args) => <ButtonWatchNow {...args} />,
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