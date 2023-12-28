import useTranslations from "../../../hooks/useTranslations";

const TabsContentAbout = () => {
  const { lang } = useTranslations();

  return (
    <div className="px-10 text-sm tracking-wide">
      <p>{lang.about}</p>
    </div>
  );
};

export default TabsContentAbout;
