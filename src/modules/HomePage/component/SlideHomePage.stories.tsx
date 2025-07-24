// src/modules/HomePage/components/SlideHomePage.stories.tsx

import type { Meta, StoryObj } from '@storybook/react-vite';
import SlideHomePage from './SlideHomePage';

const meta: Meta<typeof SlideHomePage> = {
  title: 'HomePage/SlideHomePage',
  component: SlideHomePage,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SlideHomePage>;

export const Default: Story = {};