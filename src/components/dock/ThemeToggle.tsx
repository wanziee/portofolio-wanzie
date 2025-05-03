import Moon from "../../assets/moon.png";
import Sun from "../../assets/sun.png";
import { useState, useEffect } from "react";

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <button
      className="w-9 h-9 rounded-full hover:bg-accent-dock  flex items-center justify-center transition-colors"
      onClick={toggleMode}
    >
      <img
        src={isDarkMode ? Moon : Sun}
        className={`${isDarkMode ? "w-6.5 h-6.5" : "w-5.5 h-5.5"}`}
      />
    </button>
  );
}

export default ThemeToggle;
