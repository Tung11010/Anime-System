import type { Meta, StoryObj } from '@storybook/react';
import { InputComment } from './index';

const meta: Meta = {
  title: 'Components/Input',
  tags: ['autodocs'],
};
export default meta;

export const CommentInput: StoryObj = {
  render: (args) => <InputComment {...args} />,
};