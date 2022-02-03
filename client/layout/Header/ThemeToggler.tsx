import React, { useEffect, useState } from "react";
import Moon from "icons/Moon";
import Sun from "icons/Sun";

function ThemeToggler() {
  const [isDarkMode, setDarkMode] = useState(false);

  const setDark = () => {
    document.documentElement.classList.add("dark");
    document.body.classList.add("dark");
    setDarkMode(true);
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    document.documentElement.setAttribute("data-theme", "light");
    document.documentElement.classList.remove("dark");
    document.body.classList.remove("dark");
    setDarkMode(false);
  };

  useEffect(() => {
    const prefersDark =
      (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches) ||
      localStorage.getItem("theme") === "dark";

    if (prefersDark && !isDarkMode) {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const toggleTheme: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    if (!isDarkMode) {
      setDark();
    } else {
      setLight();
    }
  };

  return (
    <div className="mx-4">
      {isDarkMode ? (
        <button
          className="rounded-full bg-transparent p-1"
          onClick={toggleTheme}
        >
          <Sun className="text-white" />
        </button>
      ) : (
        <button
          className="rounded-full bg-transparent p-1"
          onClick={toggleTheme}
        >
          <Moon className="text-gray-800" />
        </button>
      )}
    </div>
  );
}

export default ThemeToggler;
