// src/modules/Layouts/components/HeaderLayout.stories.tsx

import type { Meta, StoryObj } from '@storybook/react-vite';
import HeaderClient from './HeaderClient';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof HeaderClient> = {
  title: 'Layouts/Client/HeaderClient',
  component: HeaderClient,
  tags: ['autodocs'],
  decorators: [
      (Story) => (
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      ),
    ],
};

export default meta;

type Story = StoryObj<typeof HeaderClient>;

export const Default: Story = {
  args: {
    onSearchClick: () => alert('Search clicked!'),
  },
};