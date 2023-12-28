import { useContext } from "react";
import { TranslationsContext } from "../contexts/translationsContext";

export default function useTranslations() {
  const { lang, spanish, english } = useContext(TranslationsContext);

  return {
    lang,
    spanish,
    english,
  };
}
