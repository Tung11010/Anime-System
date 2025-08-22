import React from 'react';
import { Button } from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        {children}
        <div className="flex justify-end gap-3 mt-4">
          <Button variant="secondary" onClick={onClose}>
            Hủy
          </Button>
        </div>
      </div>
    </div>
  );
};