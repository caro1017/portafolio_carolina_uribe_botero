import { useEffect, useRef, useCallback } from "react";
import { Images } from "../../images/Images";
import { dataSkills } from "../../data/dataSkills";
import useTranslations from "../../hooks/useTranslations";

const Skills = () => {
  const skillsContainerRef = useRef(null);
  const requestRef = useRef(null);
  const { lang } = useTranslations();

  const cloneSkills = useCallback(() => {
    const skillsContainer = skillsContainerRef.current;

    const skillItems = document.querySelectorAll(".skill-item");
    skillItems.forEach((item) => {
      const clone = item.cloneNode(true);
      skillsContainer.appendChild(clone);
    });
  }, []);

  const animateScroll = useCallback(() => {
    const container = skillsContainerRef.current;

    container.scrollLeft += 1;

    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      cloneSkills();
      container.scrollLeft -= container.clientWidth;
    }

    requestRef.current = requestAnimationFrame(animateScroll);
  }, [cloneSkills]);

  useEffect(() => {
    cloneSkills();
    requestRef.current = requestAnimationFrame(animateScroll);

    return () => {
      // Detener la animación al salir del componente
      cancelAnimationFrame(requestRef.current);
    };
  }, [animateScroll, cloneSkills]);

  return (
    <>
      <div>
        <div className="flex text-xs font-['Paprika'] text-greyOpacity mt-10 md:mt-8 lg:mt-[90px] ml-10 lg:ml-20 mb-5">
          <p className="md:text-sm ">{lang.titleSkills}</p>
          <img
            className="w-14 ml-2 "
            src={Images.lightArrowLeftCustom}
            alt="Arrow Line"
          />
        </div>

        <div
          className="skills-container flex justify-center overflow-hidden mx-10 mb-20"
          ref={skillsContainerRef}
        >
          {dataSkills.map((skill) => (
            <div key={skill.id} className="skill-item flex-shrink-0 w-32">
              <div className="h-20 w-20 ml-5">
                <img src={skill.icon} alt={skill.icon} className="p-5" />
              </div>
              <div className="text-center">
                <p className="uppercase text-[10px] font-extrabold tracking-wider">
                  {skill.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
