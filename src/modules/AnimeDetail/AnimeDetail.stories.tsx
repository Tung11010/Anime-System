
import AnimeDetail from './pages/AnimeDetail';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AnimeDetail> = {
  title: 'Modules/AnimeDetail/AnimeDetail',
  component: AnimeDetail,
};

export default meta;

type Story = StoryObj<typeof AnimeDetail>;

export const Default: Story = {
  render: () => <AnimeDetail />,
};
