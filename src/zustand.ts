// 스토어 생성
import { create } from "zustand";

type State = {
  theme: boolean;
  updateTheme: (theme: boolean) => void;
};

const useThemeStore = create<State>((set) => ({
  theme: false,
  updateTheme: (theme) => set({ theme }),
}));

export default useThemeStore;
// https://velog.io/@sumi-0011/zustand-persist
