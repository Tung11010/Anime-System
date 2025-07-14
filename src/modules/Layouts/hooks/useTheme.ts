import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export enum ThemModeEnum {
  light = "light",
  dark = "dark",
}
export type ThemeStoreType = {
  themeMode: ThemModeEnum;
  handleToggleMode: () => void;
};

export const useThemModeStore = create(
  persist<ThemeStoreType>(
    (set) => ({
      themeMode: ThemModeEnum.light,
      handleToggleMode() {
        set(({ themeMode }) => ({
          themeMode: themeMode === ThemModeEnum.light ? ThemModeEnum.dark : ThemModeEnum.light,
        }));
      },
    }),
    {
      name: "themeStore", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
