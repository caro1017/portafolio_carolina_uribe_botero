import useTranslations from "../../hooks/useTranslations";
import TabsBar from "../TabsBar/TabsBar";
import Gallery from "../Gallery/Gallery";

const Projects = () => {
  const { lang } = useTranslations();

  const filterProjectsByCategory = (category) => {
    return lang.projects.filter((project) =>
      project.category.includes(category)
    );
  };

  const allProjects = filterProjectsByCategory("all");
  const webProjects = filterProjectsByCategory("web");
  const designProjects = filterProjectsByCategory("design");

  return (
    <section id="projects">
      <div className="bg-white dark:bg-black md:py-20">
        <div className="flex justify-center">
          <TabsBar
            titleTab1={lang.titleTabs.all}
            titleTab2={lang.titleTabs.web}
            titleTab3={lang.titleTabs.design}
            content1={<Gallery projects={allProjects} />}
            content2={<Gallery projects={webProjects} />}
            content3={<Gallery projects={designProjects} />}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
