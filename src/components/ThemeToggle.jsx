import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-3.25 right-4 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outlin-hidden cursor-pointer",
      )}
    >
      {isDarkMode ? (
        <Sun
          className={cn(
            "h-6 w-6 transition-all duration-300",
            "stroke-yellow-300 hover:fill-yellow-300",
          )}
        />
      ) : (
        <Moon
          className={cn(
            "h-6 w-6 transition-all duration-300",
            "stroke-blue-900 hover:fill-blue-900",
          )}
        />
      )}
    </button>
  );
};
