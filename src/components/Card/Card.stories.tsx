// MovieCard.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { VerticalCard, HorizonCard, MiniVerticalCard } from ".";
import { MemoryRouter } from "react-router-dom";

const meta: Meta = {
  title: "Components/Card",
  tags: ["autodocs"],
  component: VerticalCard,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;

// ---- VerticalCard story ----
export const Vertical: StoryObj = {
  render: () => (
    <VerticalCard
      link="/anime/boruto"
      thumbnail="https://i.redd.it/w6541yr1pamb1.jpg"
      episode={98}
      comments={11}
      views={9149}
      title="Boruto: Naruto Next Generations"
    />
  ),
};

// ---- HorizonCard story ----
export const Horizon: StoryObj = {
  render: () => (
    <HorizonCard
      link="#"
      episode={98}
      views={9149}
      title="Boruto: Naruto Next Generations"
      thumbnail="https://i.redd.it/w6541yr1pamb1.jpg"
    />
  ),
};

// ---- MiniVerticalCard story ----
export const MiniVertical: StoryObj = {
  render: () => (
    <MiniVerticalCard
      link="#"
      title="The Seven Deadly Sins"
      views={19141}
      thumbnail="https://i.redd.it/w6541yr1pamb1.jpg"
    />
  ),
};
