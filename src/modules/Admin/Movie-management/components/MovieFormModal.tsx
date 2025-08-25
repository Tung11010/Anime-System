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
      <div className="space-y-6 max-w-3xl mx-auto">
        {error && <div className="text-red-500">{error}</div>}

        {/* Tiêu đề */}
        <div className="grid grid-cols-2 gap-4">
          <Input
            type="text"
            name="title"
            placeholder="Tiêu đề"
            value={formData.title}
            onChange={onInputChange}
            className="w-full max-w-md"
          />
          <Input
            type="text"
            name="original_title"
            placeholder="Tiêu đề gốc"
            value={formData.original_title}
            onChange={onInputChange}
            className="w-full max-w-md"
          />
        </div>

        {/* Mô tả */}
        <textarea
          name="description"
          placeholder="Mô tả"
          value={formData.description}
          onChange={onInputChange}
          className="w-full p-2 border rounded h-28 resize-none dark:bg-gray-700 dark:text-white"
        />

        {/* Ngày phát hành + Loại */}
        <div className="grid grid-cols-2 gap-4">
          <Input
            type="date"
            name="release_date"
            value={
              formData.release_date instanceof Date
                ? formData.release_date.toISOString().split('T')[0]
                : formData.release_date
            }
            onChange={onDateChange}
            className="w-full max-w-md"
          />
          <Select
            name="type"
            value={formData.type}
            onChange={onInputChange}
            options={[
              { value: '', label: 'Chọn loại' },
              ...movieTypes.map((t) => ({ value: t, label: t })),
            ]}
            className="w-full max-w-md"
          />
        </div>

        {/* Trạng thái + Studio */}
        <div className="grid grid-cols-2 gap-4">
          <Select
            name="status"
            value={formData.status}
            onChange={onInputChange}
            options={[
              { value: '', label: 'Chọn trạng thái' },
              ...statuses.map((s) => ({ value: s, label: s })),
            ]}
            className="w-full max-w-md"
          />
          <Input
            type="text"
            name="studio"
            placeholder="Studio"
            value={formData.studio}
            onChange={onInputChange}
            className="w-full max-w-md"
          />
        </div>

        {/* Rating + Ảnh */}
        <div className="grid grid-cols-2 gap-4">
          <Input
            type="number"
            name="rating"
            placeholder="Đánh giá (0 - 10)"
            value={formData.rating}
            onChange={onNumberChange}
            min={0}
            max={10}
            step={0.1}
            className="w-full max-w-md"
          />
          <Input
            type="text"
            name="img_url"
            placeholder="URL Hình ảnh"
            value={formData.img_url}
            onChange={onInputChange}
            className="w-full max-w-md"
          />
        </div>

        {/* Thời lượng + Chất lượng */}
        <div className="grid grid-cols-2 gap-4">
          <Input
            type="text"
            name="duration"
            placeholder="Thời lượng (ví dụ: 2h 30m)"
            value={formData.duration}
            onChange={onInputChange}
            className="w-full max-w-md"
          />
          <Select
            name="quality"
            value={formData.quality}
            onChange={onInputChange}
            options={[
              { value: '', label: 'Chọn chất lượng' },
              ...qualities.map((q) => ({ value: q, label: q })),
            ]}
            className="w-full max-w-md"
          />
        </div>

        {/* Điểm số */}
        <Input
          type="text"
          name="score"
          placeholder="Điểm số (ví dụ: 8.5/10)"
          value={formData.score}
          onChange={onInputChange}
          className="w-full max-w-md"
        />

        {/* Action buttons */}
        <div className="flex justify-end gap-3 pt-4">
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
