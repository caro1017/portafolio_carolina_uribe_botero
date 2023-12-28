import TabsBar from "../TabsBar/TabsBar";
import useTranslations from "../../hooks/useTranslations";

import TabsContentAbout from "../TabsContent/TabsContentAbout/TabsContentAbout";
import TabsContentExperience from "../TabsContent/TabsContentExperience/TabsContentExperience";
import TabsContentEducation from "../TabsContent/TabsContentEducation/TabsContentEducation";
import BasicButton from "../Buttons/BasicButton/BasicButton";

const Profile = () => {
  const { lang } = useTranslations();

  return (
    <section id="about">
      <div className="bg-white dark:bg-black flex justify-center pt-20">
        <TabsBar
          titleTab1={lang.titleTabs.about}
          titleTab2={lang.titleTabs.education}
          titleTab3={lang.titleTabs.experience}
          content1={<TabsContentAbout />}
          content2={<TabsContentEducation educationData={lang.education} />}
          content3={<TabsContentExperience experienceData={lang.experience} />}
        />
      </div>
      <div className="flex justify-center pb-6">
        <BasicButton
          title={lang.titleButton.download}
          icon={<i className='bx bx-down-arrow-alt'/>}
        />
      </div>
    </section>
  );
};

export default Profile;
