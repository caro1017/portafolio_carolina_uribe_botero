/* eslint-disable react/jsx-no-target-blank */
import { Images } from "../../images/Images";
import BasicButton from "../Buttons/BasicButton/BasicButton";
import useTranslations from "../../hooks/useTranslations";

const ContactMe = () => {
  const { lang } = useTranslations();

  return (
    <section id="contactMe">
      <div className="flex justify-center space-x-20   md:space-x-32 mb-20">
        <div className="mt-16 md:mt-10">
          <img
            src={Images.lightLogo}
            alt="Logo Cubo"
            className="md:w-28 w-20"
          />
        </div>

        <div>
          <div className="flex text-xs font-['Paprika'] text-greyOpacity md:ml-28 mb-5">
            <img
              className="w-12"
              src={Images.lightArrowRightCustom}
              alt="Arrow Line"
            />
            <p className="ml-2">{lang.writeMe}</p>
          </div>
          <a href="mailto:uribebotero.carolina@gmail.com" target="_blank">
            <BasicButton
              title={lang.titleButton.contact}
              icon={<i className="bx bx-mail-send" />}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
