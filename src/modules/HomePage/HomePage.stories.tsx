// src/modules/HomePage/components/SlideHomePage.stories.tsx

import type { Meta, StoryObj } from '@storybook/react-vite';
import HomePage from './HomePage';

const meta: Meta<typeof HomePage> = {
  title: 'HomePage',
  component: HomePage,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof HomePage>;

export const Default: Story = {};