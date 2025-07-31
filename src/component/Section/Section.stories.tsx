import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import SectionHeading from "./SectionHeading";

const meta: Meta<typeof SectionHeading> = {
  title: "Components/SectionHeading",
  component: SectionHeading,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof SectionHeading>;

// ⭐ 1. Default Heading
export const Default: Story = {
  args: {
    title: "Trending Now",
  },
};

// ⭐ 2. Heading với View All
export const WithViewAll: Story = {
  args: {
    title: "Popular",
    showViewAll: true,
  },
};

// ⭐ 3. Heading với Filter (Day / Week / Month / Year)
export const WithFilters: Story = {
  render: () => {
    const [activeFilter, setActiveFilter] = useState("Day");

    return (
      <SectionHeading
        title="Top Views"
        filters={["Day", "Week", "Month", "Year"]}
        activeFilter={activeFilter}
        onFilterChange={(filter) => setActiveFilter(filter)}
      />
    );
  },
};
