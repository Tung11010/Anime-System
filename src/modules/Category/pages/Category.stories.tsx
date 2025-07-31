// src/modules/HomePage/components/SlideHomePage.stories.tsx

import type { Meta, StoryObj } from '@storybook/react-vite';

import { BrowserRouter } from 'react-router-dom';
import Category from './Categoty';


const meta: Meta<typeof Category> = {
  title: 'Category',
  component: Category,
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

type Story = StoryObj<typeof Category>;

export const Default: Story = {};