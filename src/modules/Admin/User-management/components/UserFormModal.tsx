import { useUserStore } from '../store/userStore';
import { ROLES } from '../constants';
import { Modal } from './ui/Modal';
import { Input } from './ui/Input';
import { Select } from './ui/Select';
import { Button } from './ui/Button';

export const UserFormModal: React.FC<{ onSave: () => void }> = ({ onSave }) => {
  const { showForm, editingUser, formData, setShowForm, setFormData } = useUserStore();

  return (
    <Modal
      isOpen={showForm}
      onClose={() => setShowForm(false)}
      title={editingUser ? 'Sửa user' : 'Thêm user'}
    >
      <Input
        type="text"
        placeholder="Username"
        className="mb-2 w-full"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <Input
        type="email"
        placeholder="Email"
        className="mb-2 w-full"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      {!editingUser && (
        <Input
          type="password"
          placeholder="Password"
          className="mb-2 w-full"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
      )}
      <Select
        options={[
          { value: ROLES.USER, label: 'User' },
          { value: ROLES.ADMIN, label: 'Admin' },
        ]}
        className="mb-2 w-full"
        value={formData.role}
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
      />
      <Button variant="primary" onClick={onSave} className="w-full">
        Lưu
      </Button>
    </Modal>
  );
};