import { useState } from "react";
import useTranslations from "../../hooks/useTranslations";
import TabsBar from "../TabsBar/TabsBar";
import Gallery from "../Gallery/Gallery";
import ProjectContentModal from "../ModalBar/ProjectContentModal/ProjectContentModal";

const Projects = () => {
  const { lang } = useTranslations();
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filterProjectsByCategory = (category) => {
    return lang.projects.filter((project) =>
      project.category.includes(category)
    );
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
            content1={
              <Gallery
                projects={allProjects}
                onProjectClick={handleProjectClick}
              />
            }
            content2={
              <Gallery
                projects={webProjects}
                onProjectClick={handleProjectClick}
              />
            }
            content3={
              <Gallery
                projects={designProjects}
                onProjectClick={handleProjectClick}
              />
            }
          />
        </div>
      </div>

      {selectedProject && (
        <ProjectContentModal
          open={isModalOpen}
          onClose={handleCloseModal}
          nameProjects={selectedProject.nameProjects}
          description={selectedProject.description}
          technology={selectedProject.technology}
          imgScreens={selectedProject.imgScreens}
          urlDemo={selectedProject.urlDemo}
          urlFigma={selectedProject.urlFigma}
          urlGitHub={selectedProject.urlGitHub}
        />
      )}
    </section>
  );
};

export default Projects;
