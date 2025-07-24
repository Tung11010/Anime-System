import type { Meta, StoryObj } from '@storybook/react';
import VerticalCard from './VerticalCard';
import HorizonCard from './HorizonCard';
import CommentCard from './CommentCard';

const meta: Meta = {
  title: 'Components/MovieCard',
  tags: ['autodocs'],
};

export default meta;

export const Vertical: StoryObj = {
  render: () => <VerticalCard />,
};

export const Horizon: StoryObj = {
  render: () => <HorizonCard />,
};

export const Comment: StoryObj = {
  render: () => <CommentCard />,
};