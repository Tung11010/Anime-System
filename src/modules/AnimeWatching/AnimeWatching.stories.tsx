
import AnimeWatching from "./pages/AnimeWatching";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AnimeWatching> = {
  title: "Modules/AnimeWatching/AnimeWatching",
  component: AnimeWatching,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AnimeWatching>;

export const Default: Story = {
  render: () => <AnimeWatching />,
};