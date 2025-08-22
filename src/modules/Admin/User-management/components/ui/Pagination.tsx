import React from 'react';
import { Button } from './Button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="flex justify-center items-center gap-2 mt-6">
      <Button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="disabled:opacity-50"
      >
        Prev
      </Button>
      {Array.from({ length: totalPages }, (_, i) => (
        <Button
          key={i + 1}
          onClick={() => onPageChange(i + 1)}
          variant={currentPage === i + 1 ? 'primary' : 'secondary'}
        >
          {i + 1}
        </Button>
      ))}
      <Button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="disabled:opacity-50"
      >
        Next
      </Button>
    </div>
  );
};