import useTranslations from "../../hooks/useTranslations";

const Author = () => {
  const { lang } = useTranslations();

  return (
    <p className="text-center py-20 text-xs dark:text-greyOpacity">
      {lang.author}
      <span className="text-blue font-['Paprika']">Carolina Uribe Botero</span>
    </p>
  );
};

export default Author;
