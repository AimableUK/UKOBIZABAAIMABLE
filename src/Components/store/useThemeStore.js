import { create } from "zustand";

const useThemeStore = create((set) => ({
  theme: localStorage.getItem("selectedTheme") || "light",
  
  initializeTheme: () => {
    const savedTheme = localStorage.getItem("selectedTheme") || "light";
    document.body.setAttribute("data-theme", savedTheme);
    set({ theme: savedTheme });
  },

  toggleTheme: () => {
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      document.body.setAttribute("data-theme", newTheme);
      localStorage.setItem("selectedTheme", newTheme);
      return { theme: newTheme };
    });
  },
}));

export default useThemeStore;
