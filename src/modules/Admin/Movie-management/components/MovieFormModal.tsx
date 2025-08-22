import React from 'react';
import { Movie } from '../types';
import { movieTypes, statuses, qualities } from '../constants';
import { Modal } from '@/components/Modal/ModalAdmin';
import { Input } from '@/components/Input/InputAdmin';
import { Select } from '@/components/Select/SelectAdmin';
import { Button } from '@/components/Button/ButtonAdmin';

interface MovieFormModalProps {
  showModal: boolean;
  selectedMovie: Movie | null;
  formData: Movie;
  onClose: () => void;
  onSave: () => void;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  onNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string | null;
}

export const MovieFormModal: React.FC<MovieFormModalProps> = ({
  showModal,
  selectedMovie,
  formData,
  onClose,
  onSave,
  onInputChange,
  onNumberChange,
  onDateChange,
  error,
}) => {
  if (!showModal) return null;

  return (
    <Modal
      isOpen={showModal}
      onClose={onClose}
      title={selectedMovie ? 'Sửa phim' : 'Thêm phim'}
    >
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <div className="space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <Input
            type="text"
            name="title"
            placeholder="Tiêu đề"
            value={formData.title}
            onChange={onInputChange}
            className="dark:bg-gray-700 dark:text-white"
          />
          <Input
            type="text"
            name="original_title"
            placeholder="Tiêu đề gốc"
            value={formData.original_title}
            onChange={onInputChange}
            className="dark:bg-gray-700 dark:text-white"
          />
        </div>
        <textarea
          name="description"
          placeholder="Mô tả"
          value={formData.description}
          onChange={onInputChange}
          className="w-full p-2 border rounded h-24 dark:bg-gray-700 dark:text-white"
        />
        <div className="grid grid-cols-2 gap-2">
          <Input
            type="date"
            name="release_date"
            placeholder="Ngày phát hành"
            value={
              formData.release_date instanceof Date
                ? formData.release_date.toISOString().split('T')[0]
                : formData.release_date
            }
            onChange={onDateChange}
            className="dark:bg-gray-700 dark:text-white"
          />
          <Select
            name="type"
            value={formData.type}
            onChange={onInputChange}
            className="dark:bg-gray-700 dark:text-white"
            options={[
              { value: '', label: 'Chọn loại' },
              ...movieTypes.map((t) => ({ value: t, label: t })),
            ]}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Select
            name="status"
            value={formData.status}
            onChange={onInputChange}
            className="dark:bg-gray-700 dark:text-white"
            options={[
              { value: '', label: 'Chọn trạng thái' },
              ...statuses.map((s) => ({ value: s, label: s })),
            ]}
          />
          <Input
            type="text"
            name="studio"
            placeholder="Studio"
            value={formData.studio}
            onChange={onInputChange}
            className="dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Input
            type="number"
            name="rating"
            placeholder="Đánh giá"
            value={formData.rating}
            onChange={onNumberChange}
            min={0}
            max={10}
            step={0.1}
            className="dark:bg-gray-700 dark:text-white"
          />
          <Input
            type="text"
            name="img_url"
            placeholder="URL Hình ảnh"
            value={formData.img_url}
            onChange={onInputChange}
            className="dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Input
            type="text"
            name="duration"
            placeholder="Thời lượng (ví dụ: 2h 30m)"
            value={formData.duration}
            onChange={onInputChange}
            className="dark:bg-gray-700 dark:text-white"
          />
          <Select
            name="quality"
            value={formData.quality}
            onChange={onInputChange}
            className="dark:bg-gray-700 dark:text-white"
            options={[
              { value: '', label: 'Chọn chất lượng' },
              ...qualities.map((q) => ({ value: q, label: q })),
            ]}
          />
        </div>
        <Input
          type="text"
          name="score"
          placeholder="Điểm số (ví dụ: 8.5/10)"
          value={formData.score}
          onChange={onInputChange}
          className="dark:bg-gray-700 dark:text-white"
        />
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="secondary" onClick={onClose}>
            Hủy
          </Button>
          <Button variant="primary" onClick={onSave}>
            Lưu
          </Button>
        </div>
      </div>
    </Modal>
  );
};
