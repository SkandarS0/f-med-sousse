import { Store, useStore } from "@tanstack/react-store";

export type Theme = "dark" | "light" | "system";

const themeKey = "theme";

const themeStore = new Store<Theme>(
  (localStorage.getItem(themeKey) as Theme) || "system",
);

themeStore.subscribe(({ currentVal }) => {
  localStorage.setItem(themeKey, currentVal);
  const root = window.document.documentElement;

  root.classList.remove("light", "dark");

  if (currentVal === "system") {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    root.classList.add(systemTheme);
    return;
  }

  root.classList.add(currentVal);
});

export function useTheme() {
  const theme = useStore(themeStore);
  const setTheme = (newTheme: Theme) => {
    themeStore.setState(newTheme);
  };
  return {
    theme,
    setTheme,
  };
}
