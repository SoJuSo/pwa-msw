import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { ReactNode, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const ManagedUIContext = ({ children }: { children: ReactNode }) => {
  const [localTheme] = useLocalStorage("theme");

  const themeMode = useMemo((): string => {
    if (localTheme) return localTheme;
    else return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }, [localTheme]);

  return (
    <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>{children}</ThemeProvider>
  );
};
