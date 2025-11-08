"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

/**테마 사용을 위한 커스텀 훅 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme는 ThemeProvider 내부에서만 사용할 수 있습니다");
  }
  return context;
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = window.localStorage.getItem("theme");
      return savedTheme || "light";
    }
    return "light";
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme == "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const setThemeMode = (mode) => {
    if (mode === "dark" || mode === "light") {
      localStorage.setItem("theme", mode);
      setTheme(mode);
    }
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const value = {
    theme,
    isDarkMode: theme === "dark",
    toggleTheme,
    setTheme: setThemeMode,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
