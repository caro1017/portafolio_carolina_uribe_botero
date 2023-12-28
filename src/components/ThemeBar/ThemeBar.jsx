/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { IconButton } from "@mui/material";
import { useTheme } from "../../hooks/ThemeContext";

const ThemeBar = () => {
  // Estado para controlar qué icono se muestra
  const { isDarkMode, toggleTheme } = useTheme() ;

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", JSON.stringify(isDarkMode));

  }, [isDarkMode]);

  // Función para alternar entre los iconos al hacer clic
  const handleIconChange = () => {
    toggleTheme();
  };

  return (
    <div>
      <IconButton aria-label="Toggle theme" onClick={handleIconChange}>
        {isDarkMode ? (
          <i className="bx bx-moon text-grey hover:text-blue text-lg " />
        ) : (
          <i className="bx bx-sun text-grey hover:text-blue text-xl" />
        )}
      </IconButton>
    </div>
  );
};

export default ThemeBar;
