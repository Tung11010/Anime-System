import React from 'react';

interface TableProps {
  headers: string[];
  children: React.ReactNode;
  title: string;
}

export const Table: React.FC<TableProps> = ({ headers, children, title }) => {
  return (
    <>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} className="py-3 px-6 border-b text-center">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </>
  );
};