import { useUsers, useDeleteUser, useCreateUser, useUpdateUser } from '../queryHooks/useUserQueries';
import { useUserStore } from '../store/userStore';
import { UserTable } from '../components/UserTable';
import { UserFormModal } from '../components/UserFormModal';
import {  USERS_PER_PAGE_OPTIONS } from '../constants';
import { containerStyles, mainContentStyles } from './styled';
import { Sidebar } from '@/components/Sidebar/SidebarAdmin';
import { Button } from '@/components/Button/ButtonAdmin';
import { Input } from '@/components/Input/InputAdmin';
import { Select } from '../../../../components/Select/SelectAdmin';
import { Pagination } from '../../../../components/Pagination/Pagination';
import { User } from '../types';
import { useState } from 'react';


export default function UserListPage() {
  const { data: users = [], isLoading, error } = useUsers();
  const deleteUser = useDeleteUser();
  const createUser = useCreateUser();
  const updateUser = useUpdateUser();
  const [collapsed] = useState(false);
  const {
    searchTerm,
    currentPage,
    usersPerPage,
    setSearchTerm,
    setCurrentPage,
    setUsersPerPage,
    formData,
    editingUser,
    setShowForm,
    setEditingUser,
    setFormData,
  } = useUserStore();

  const handleEdit = (user: User) => {
    setEditingUser(user);
    setFormData({
      username: user.username,
      email: user.email,
      password: '',
      role: user.role, 
    });
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa người dùng này?')) return;
    deleteUser.mutate(id, {
      onError: () => alert('Xóa thất bại'),
    });
  };

  const handleSave = () => {
    if (editingUser) {
      updateUser.mutate(
        { id: editingUser.id, data: { username: formData.username, email: formData.email, role: formData.role } },
        {
          onError: () => alert('Cập nhật thất bại'),
          onSuccess: () => {
            setShowForm(false);
            setEditingUser(null);
            setFormData({ username: '', email: '', password: '', role: '' }); 
          },
        }
      );
    } else {
      createUser.mutate(formData, {
        onError: () => alert('Thêm thất bại'),
        onSuccess: () => {
          setShowForm(false);
          setFormData({ username: '', email: '', password: '', role: '' });
        },
      });
    }
  };

  if (isLoading) return <div>Đang tải...</div>;
  if (error) return <div className="text-red-500">{error.message}</div>;

  const filteredUsers = users.filter((u: User) =>
    u.username.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  
  const normalUsers = currentUsers.filter((u: User) => u.role.toLowerCase() === 'user');
  const adminUsers = currentUsers.filter((u: User) => u.role.toLowerCase() === 'admin');

  return (
    <div className={containerStyles}>
      <Sidebar
        onLogout={() => {
          localStorage.removeItem('token');
          window.location.href = '/';
        }}
      />
      <div className={`${mainContentStyles} ${collapsed ? 'ml-20' : 'ml-64'}`}>
        <div className="mb-8">
          <div className="text-3xl font-bold mb-4">Danh sách người dùng</div>
          <div>
            <Button
              variant="primary"
              onClick={() => {
                setShowForm(true);
                setEditingUser(null);
                setFormData({ username: '', email: '', password: '', role: '' });
              }}
            >
              + Thêm user
            </Button>
          </div>
        </div>
        <div className="mb-6 flex items-center gap-4">
          <Input
            type="text"
            placeholder="Tìm theo username..."
            className="w-64"
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
          />
          <Select
            options={USERS_PER_PAGE_OPTIONS.map((option) => ({
              value: option,
              label: `${option} / trang`,
            }))}
            value={usersPerPage}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setUsersPerPage(Number(e.target.value))}
          />
        </div>
        <UserTable
          users={normalUsers}
          onEdit={handleEdit}
          onDelete={handleDelete}
          title="👤 Người dùng"
        />
        <UserTable
          users={adminUsers}
          onEdit={handleEdit}
          onDelete={handleDelete}
          title="🛠️ Quản trị viên"
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
        <UserFormModal onSave={handleSave} />
      </div>
    </div>
  );
}