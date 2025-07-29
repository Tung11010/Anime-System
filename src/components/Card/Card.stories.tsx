import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './index';

const meta: Meta = {
  title: 'Components/Card',
  tags: ['autodocs'],
};
export default meta;

export const Comment: StoryObj = {
  render: (args) => (
    <CommentCard
      username="Chris Curry"
      time="1 Hour ago"
      content="This is a comment example."
      {...args}
    />
  ),
};
