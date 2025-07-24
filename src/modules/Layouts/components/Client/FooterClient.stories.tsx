import type { Meta, StoryObj } from '@storybook/react';
import FooterClient from './FooterClient';

const meta: Meta<typeof FooterClient> = {
  title: 'Layouts/Client/FooterClient',
  component: FooterClient,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FooterClient>;

export const Default: Story = {};