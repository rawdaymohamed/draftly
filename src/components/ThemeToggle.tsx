"use client";

import { useTheme } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      onClick={toggleTheme}
      className={`cursor-pointer
        relative inline-flex h-7 w-14 shrink-0 items-center rounded-full
        border border-slate-300 bg-slate-100 p-0.5
        shadow-sm transition-colors duration-300
        hover:bg-slate-200
        dark:border-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700
      `}
    >
      {/* Sun */}
      <svg
        className={`absolute left-1.5 z-10 size-4 transition-colors duration-300 ${
          isDark ? "text-slate-400" : "text-yellow-500"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
        <path d="M11 0h2v4h-2V0ZM11 20h2v4h-2v-4ZM0 11h4v2H0v-2ZM20 11h4v2h-4v-2ZM4.22 2.8l2.83 2.83-1.42 1.42L2.8 4.22 4.22 2.8ZM18.36 16.95l2.83 2.83-1.41 1.42-2.83-2.83 1.41-1.42ZM19.78 2.8l1.42 1.42-2.83 2.83-1.42-1.42 2.83-2.83ZM5.64 16.95l1.41 1.42-2.83 2.83-1.42-1.42 2.84-2.83Z" />
      </svg>

      {/* Moon */}
      <svg
        className={`absolute right-1.5 z-10 size-4 transition-colors duration-300 ${
          isDark ? "text-white" : "text-slate-400"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M21 14.6A8.5 8.5 0 0 1 9.4 3a9 9 0 1 0 11.6 11.6Z" />
      </svg>

      {/* Moving circle */}
      <span
        className={`
          relative z-20 size-6 rounded-full bg-white shadow-md
          transition-transform duration-300 ease-in-out
          dark:bg-slate-600
          ${isDark ? "translate-x-6.5" : "translate-x-0"}
        `}
      />
    </button>
  );
};

export default ThemeToggle;
