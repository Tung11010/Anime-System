// src/modules/Layouts/components/HeaderLayout.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import HeaderClient from './HeaderClient';

const meta: Meta<typeof HeaderClient> = {
  title: 'Layouts/Client/HeaderClient',
  component: HeaderClient,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof HeaderClient>;

export const Default: Story = {
  args: {
    onSearchClick: () => alert('Search clicked!'),
  },
};