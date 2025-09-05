import React from 'react';

interface TableRowProps {
  children: React.ReactNode;
}

export const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">{children}</tr>;
};