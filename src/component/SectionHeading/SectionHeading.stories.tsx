
import type { Meta, StoryObj } from "@storybook/react";
import SectionHeading from "./SectionHeading";

const meta: Meta<typeof SectionHeading> = {
  title: "Components/SectionHeading",
  component: SectionHeading,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof SectionHeading>;

export const Default: Story = {
  args: {
    title: "Trending Now",
  },
};