/* eslint-disable react/prop-types */
import SocialMedia from "../SocialMedia/SocialMedia";
import { Images } from "../../images/Images";
import { useTheme } from "../../hooks/ThemeContext";
import Scroll from "../Scroll/Scroll";
/* Video Link */
import DarkThemeVideo from "../../../public/video/darkThemeVideo.mp4";
import LightThemeVideo from "../../../public/video/lightThemeVideo.mp4";
/* Traduccion */
import useTranslations from "../../hooks/useTranslations";

const Header = () => {
  const { isDarkMode } = useTheme();
  const { lang } = useTranslations();

  return (
    <>
      <div>
        <SocialMedia />
      </div>

      <div className="flex justify-center text-xs font-['Paprika'] text-greyOpacity mt-10 md:mt-8 lg:mt-[90px] ml:20 md:ml-80 mb-5">

        <img
          className="w-12"
          src={Images.lightArrowRightCustom}
          alt="Arrow Line"
        />
        <p className="ml-2 md:text-sm ">{lang.whatIDo}</p>
      </div>

      <div className="font-['Bahiana'] text-5xl md:text-7xl text-center">
        <h1>Carolina Uribe Botero</h1>
      </div>

      <div className="flex justify-center mt-32 mb-28">
        <Scroll />
      </div>

      {/* Contenedor para el video */}
      <div className="absolute inset-0 z-[-10]">
        <video
          src={isDarkMode ? DarkThemeVideo : LightThemeVideo}
          className="w-full h-full object-cover absolute left-0"
          autoPlay
          loop
          muted
        />
      </div>
    </>
  );
};

export default Header;
