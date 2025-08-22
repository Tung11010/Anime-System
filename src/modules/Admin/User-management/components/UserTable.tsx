import { User } from '../types';
import { Table } from '../../../../components/Table/TableAdmin';
import { TableRow } from '../../../../components/Table/TableRowAdmin';
import { Button } from '../../../../components/Button/ButtonAdmin';

interface UserTableProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
  title: string;
}

export const UserTable: React.FC<UserTableProps> = ({ users, onEdit, onDelete, title }) => {
  return (
    <Table headers={['Username', 'Email', 'Thao tác']} title={title}>
      {users.map((u) => (
        <TableRow key={u.id}>
          <td className="py-3 px-6 border-b text-center">{u.username}</td>
          <td className="py-3 px-6 border-b text-center">{u.email}</td>
          <td className="py-3 px-6 border-b text-center flex justify-center gap-4">
            <Button variant="primary" size="sm" onClick={() => onEdit(u)}>
              Sửa
            </Button>
            <Button variant="danger" size="sm" onClick={() => onDelete(u.id)}>
              Xóa
            </Button>
          </td>
        </TableRow>
      ))}
    </Table>
  );
};