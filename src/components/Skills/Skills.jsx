import { useEffect, useRef, useState } from "react";
import { Images } from "../../images/Images";
import { dataSkills } from "../../data/dataSkills";
import useTranslations from "../../hooks/useTranslations";

const Skills = () => {
  const skillsContainerRef = useRef(null);
  const scrollIntervalRef = useRef(null);
  const { lang } = useTranslations();
  const [isMoving, setIsMoving] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const skillsContainer = skillsContainerRef.current;

    const cloneSkills = () => {
      const skillItems = document.querySelectorAll(".skill-item");
      skillItems.forEach((item) => {
        const clone = item.cloneNode(true);
        skillsContainer.appendChild(clone);
      });
    };

    cloneSkills();

    const handleScroll = () => {
      const container = skillsContainerRef.current;
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        cloneSkills();
        container.scrollLeft -= container.clientWidth;
      }
    };

    scrollIntervalRef.current = setInterval(() => {
      if (!isMoving) {
        skillsContainer.scrollLeft += 1;
        handleScroll();
      }
    }, 5);

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, [isMoving]);

  let isScrolling = false;

  const handleStart = (e) => {
    setIsMoving(true);
    setStartX(
      e.type === "touchstart"
        ? e.touches[0].pageX
        : e.pageX - skillsContainerRef.current.offsetLeft
    );
    setScrollLeft(skillsContainerRef.current.scrollLeft);
  
    isScrolling = false;
  };
  
  const handleMove = (e) => {
    if (!isMoving) return;
  
    if (!isScrolling) {
      e.preventDefault();
    }
  
    const x =
      e.type === "touchmove"
        ? e.touches[0].pageX
        : e.pageX - skillsContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    skillsContainerRef.current.scrollLeft = scrollLeft - walk;
  
    isScrolling = true;
  };

  const handleEnd = () => {
    setIsMoving(false);
  };
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
          onMouseDown={handleStart}
          onMouseMove={handleMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={handleStart}
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}
          onTouchCancel={handleEnd}
          onTouchMoveCapture={(e) => handleMove(e)}
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
