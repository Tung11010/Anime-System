import { useState, useEffect } from 'react';
import { useUsers, useDeleteUser, useCreateUser, useUpdateUser } from '../queryHooks/useUserQueries';
import { useUserStore } from '../store/userStore';
import { UserTable } from '../components/UserTable';
import { UserFormModal } from '../components/UserFormModal';
import { USERS_PER_PAGE_OPTIONS } from '../constants';
import { containerStyles, mainContentStyles } from './styled';
import { Sidebar } from '@/components/Sidebar/SidebarAdmin';
import { Button } from '@/components/Button/ButtonAdmin';
import { Input } from '@/components/Input/InputAdmin';
import { Select } from '../../../../components/Select/SelectAdmin';
import { Pagination } from '../../../../components/Pagination/Pagination';
import { User } from '../types';
import { Header } from '@/components/Headers/HeaderAdmin';

export default function UserListPage() {
  const { data: users = [], isLoading, error } = useUsers();
  const deleteUser = useDeleteUser();
  const createUser = useCreateUser();
  const updateUser = useUpdateUser();
  const [collapsed] = useState(false);

  // ✅ Dark mode state (lấy từ localStorage)
  const [dark, setDark] = useState<boolean>(() => {
    const stored = localStorage.getItem("darkMode");
    return stored ? stored === "true" : false;
  });

  // ✅ Đồng bộ dark mode với <html> và localStorage
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [dark]);

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

  // ✅ Edit user
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

  // ✅ Delete user
  const handleDelete = (id: number) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa người dùng này?')) return;
    deleteUser.mutate(id, {
      onError: () => alert('Xóa thất bại'),
    });
  };

  // ✅ Save user (create / update)
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

  // ✅ Loading / Error
  if (isLoading) return <div className="text-gray-900 dark:text-white">Đang tải...</div>;
  if (error) return <div className="text-red-500">{String(error)}</div>;

  // ✅ Pagination logic
  const filteredUsers = users.filter((u: User) =>
    u.username.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  // ✅ Group by role
  const normalUsers = currentUsers.filter((u: User) => u.role.toLowerCase() === 'user');
  const adminUsers = currentUsers.filter((u: User) => u.role.toLowerCase() === 'admin');

  return (
    <div className={`${containerStyles} bg-white dark:bg-gray-900`}>
      <Sidebar
        onLogout={() => {
          localStorage.removeItem('token');
          window.location.href = '/';
        }}
      />

      <div className={`${mainContentStyles} ${collapsed ? 'ml-20' : 'ml-64'} pt-16`}>
        {/* ✅ Header */}
        <Header dark={dark} setDark={setDark} title="Quản lý người dùng" />

        <div className="p-8 text-gray-900 dark:text-white">
          {/* Title + Button */}
          <div className="mb-8 flex items-center justify-between">
            <div className="text-3xl font-bold">Danh sách người dùng</div>
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

          {/* Search + Select */}
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
              className="text-gray-900"
            />
          </div>

          {/* Tables */}
          <UserTable users={normalUsers} onEdit={handleEdit} onDelete={handleDelete} title="👤 Người dùng" />
          <UserTable users={adminUsers} onEdit={handleEdit} onDelete={handleDelete} title="🛠️ Quản trị viên" />

          {/* Pagination + Modal */}
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          <UserFormModal onSave={handleSave} />
        </div>
      </div>
    </div>
  );
}
