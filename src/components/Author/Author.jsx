import useTranslations from "../../hooks/useTranslations";
import IconButtonCustom from "../Buttons/IconButtonCustom/IconButtonCustom";

const Author = () => {
  const { lang } = useTranslations();

  return (
    <div>
      <p className="text-center py-5 text-xs dark:text-greyOpacity">
        {lang.author}
        <span className="text-blue font-['Paprika']">
          Carolina Uribe Botero
        </span>
      </p>
      <div className="flex justify-center space-x-5 pb-6">
        <IconButtonCustom
          size="small"
          ariaLabel="Whatsapp"
          icon={
            <i className="bx bxl-whatsapp text-xl text-grey hover:text-blue" />
          }
          href="https://api.whatsapp.com/send?phone=0573146816250&text=Hola Carolina !"
        />
        <IconButtonCustom
          size="small"
          ariaLabel="GitHub"
          icon={
            <i className="bx bxl-github text-xl text-grey hover:text-blue" />
          }
          href="https://github.com/caro1017"
        />
        <IconButtonCustom
          size="small"
          ariaLabel="Linkedin"
          icon={
            <i className="bx bxl-linkedin text-xl text-grey hover:text-blue" />
          }
          href="https://www.linkedin.com/in/carolina-uribe-botero-7b0839195/"
        />
        <IconButtonCustom
          size="small"
          ariaLabel="Behance"
          icon={
            <i className="bx bxl-behance text-xl text-grey hover:text-blue" />
          }
          href="https://www.behance.net/carolinuribeb"
        />
      </div>
    </div>
  );
};

export default Author;
