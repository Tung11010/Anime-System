import { create } from 'zustand';
import { FormData, User } from '../types';

interface UserState {
  showForm: boolean;
  editingUser: User | null;
  formData: FormData;
  searchTerm: string;
  currentPage: number;
  usersPerPage: number;
  setShowForm: (show: boolean) => void;
  setEditingUser: (user: User | null) => void;
  setFormData: (data: Partial<FormData>) => void;
  setSearchTerm: (term: string) => void;
  setCurrentPage: (page: number) => void;
  setUsersPerPage: (count: number) => void;
}

export const useUserStore = create<UserState>((set) => ({
  showForm: false,
  editingUser: null,
  formData: { username: '', email: '', password: '', role: 'user' },
  searchTerm: '',
  currentPage: 1,
  usersPerPage: 10,
  setShowForm: (show) => set({ showForm: show }),
  setEditingUser: (user) => set({ editingUser: user }),
  setFormData: (data) => set((state) => ({ formData: { ...state.formData, ...data } })),
  setSearchTerm: (term) => set({ searchTerm: term, currentPage: 1 }),
  setCurrentPage: (page) => set({ currentPage: page }),
  setUsersPerPage: (count) => set({ usersPerPage: count, currentPage: 1 }),
}));