import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { StorageService } from "@/helpers";
import { IUser } from "@/types";

export interface IConfigAppStore {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;

  currentUser: IUser | null;
  setCurrentUser: (currentUser: IUser | null) => void;

  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;

  logoutStore: () => Promise<void>;
}

const useConfigAppStore = create(
  persist<IConfigAppStore>(
    (set) => ({
      isAuthenticated: false,
      setIsAuthenticated(isAuthenticated) {
        set(() => ({ isAuthenticated }));
      },
      currentUser: null,
      setCurrentUser(currentUser) {
        set(() => ({ currentUser }));
      },
      collapsed: false,
      setCollapsed(collapsed) {
        set(() => ({ collapsed }));
      },
      async logoutStore() {
        StorageService.removeToken();
        set(() => {
          return {
            isAuthenticated: false,
          };
        });
      },
    }),
    {
      name: `ConfigApp`,
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

mountStoreDevtool("Store", useConfigAppStore);

export { useConfigAppStore };
