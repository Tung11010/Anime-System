import React from 'react';
import { Movie } from '../types';
import { Table } from '@/components/Table/TableAdmin';
import { TableRow } from '@/components/Table/TableRowAdmin';
import { Button } from '@/components/Button/ButtonAdmin';

interface MovieTableProps {
  movies: Movie[];
  onEdit: (movie: Movie) => void;
  onDelete: (id: number) => void;
}

export const MovieTable: React.FC<MovieTableProps> = ({ movies, onEdit, onDelete }) => {
  return (
    <Table
      title="Danh sách phim"
      headers={['Tiêu đề', 'Loại', 'Trạng thái', 'Đánh giá', 'Ngày phát hành', 'Hành động']}
    >
      {movies.map((movie) => (
        <TableRow key={movie.id}>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm font-medium text-gray-900 dark:text-white">{movie.title}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-500 dark:text-gray-300">{movie.type}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
              {movie.status}
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-500 dark:text-gray-300">{movie.rating}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-500 dark:text-gray-300">
              {new Date(movie.release_date).toLocaleDateString()}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
            <Button
              variant="primary"
              size="sm"
              onClick={() => onEdit(movie)}
              className="mr-2"
            >
              Sửa
            </Button>
            <Button variant="danger" size="sm" onClick={() => onDelete(movie.id!)}>
              Xóa
            </Button>
          </td>
        </TableRow>
      ))}
    </Table>
  );
};
