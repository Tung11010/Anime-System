import { Meta, StoryObj } from "@storybook/react-vite";
import UserLayout from "./LayoutClient";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof UserLayout> = {
    title: 'Layouts/Client/LayoutClient',
    component: UserLayout,
    decorators: [
        (Story) => (
          <BrowserRouter>
            <Story />
          </BrowserRouter>
        ),
      ],
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof UserLayout>;

export const Layout: Story = {
  args: {
    onSearchClick: () => alert('Search clicked!'),
  },
};