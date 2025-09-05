// src/modules/HomePage/components/SlideHomePage.stories.tsx

import type { Meta, StoryObj } from '@storybook/react-vite';
import HomePage from './HomePage';
import { BrowserRouter } from 'react-router-dom';


const meta: Meta<typeof HomePage> = {
  title: 'HomePage',
  component: HomePage,
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

type Story = StoryObj<typeof HomePage>;

export const Default: Story = {};