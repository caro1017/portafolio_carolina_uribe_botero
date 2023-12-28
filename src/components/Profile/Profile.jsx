import { useState } from "react";

import TabsBar from "../TabsBar/TabsBar";
import useTranslations from "../../hooks/useTranslations";
import TabsContentAbout from "../TabsContent/TabsContentAbout/TabsContentAbout";
import TabsContentExperience from "../TabsContent/TabsContentExperience/TabsContentExperience";
import TabsContentEducation from "../TabsContent/TabsContentEducation/TabsContentEducation";
import BasicButton from "../Buttons/BasicButton/BasicButton";
import DownloadConfirmationModal from "../ModalBar/DownloadConfirmationModal/DownloadConfirmationModal";

const Profile = () => {
  const { lang } = useTranslations();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadConfirmation = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDownload = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
      // Realiza la descarga solo si se confirma desde el botón de Descargar en el modal
      const downloadLink = document.createElement("a");
      downloadLink.href = "../../../public/pdf/Hoja_de_Vida_Carolina_UB.pdf";
      downloadLink.download = "CV_Carolina_UB.pdf";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const downloadFile = () => {
    handleDownloadConfirmation();
  };

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
          icon={<i className="bx bx-down-arrow-alt" />}
          onClick={downloadFile}
        />
      </div>
      <DownloadConfirmationModal
        open={isModalOpen}
        onClose={handleCloseModal}
        onConfirmDownload={handleConfirmDownload}
      />
    </section>
  );
};

export default Profile;
