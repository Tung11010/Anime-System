import type { Meta, StoryObj } from '@storybook/react';
import OverlaySearch from './OverlaySearch';
import { useState } from 'react';

const meta: Meta<typeof OverlaySearch> = {
  title: 'Components/OverlaySearch',
  component: OverlaySearch,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof OverlaySearch>;

// Tạo một wrapper có state để demo mở/đóng
const OverlayWrapper = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <button
        onClick={() => setIsActive(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Open Search Overlay
      </button>
      <OverlaySearch isActive={isActive} OnClose={() => setIsActive(false)} />
    </>
  );
};

export const Default: Story = {
  render: () => <OverlayWrapper />,
};