/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react";
import { createContext } from "react";
import { languages } from "../lenguages/lenguages";

export const TranslationsContext = createContext();

export default function LocaleContextProvider({ children }) {
  const [lang, setLang] = useState(() => {
    // Lee la opción del idioma almacenada en localStorage o usa el idioma por defecto (es)
    const storedLang = localStorage.getItem("selectedLanguage");
    return storedLang ? JSON.parse(storedLang) : languages.es;
  });

  useEffect(() => {
    // Guarda la opción seleccionada en localStorage cada vez que cambie
    localStorage.setItem("selectedLanguage", JSON.stringify(lang));
  }, [lang]);

  function spanish(callback) {
    callback();
    setLang(languages.es);
  }

  function english(callback) {
    callback();
    setLang(languages.en);
  }

  const selectedLanguage = lang.current === "en" ? languages.en : languages.es;

  return (
    <TranslationsContext.Provider
      value={{
        lang: selectedLanguage,
        spanish,
        english,
      }}
    >
      {children}
    </TranslationsContext.Provider>
  );
}
