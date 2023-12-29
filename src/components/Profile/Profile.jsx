import { useState } from "react";

import TabsBar from "../TabsBar/TabsBar";
import useTranslations from "../../hooks/useTranslations";
import TabsContentAbout from "../TabsContent/TabsContentAbout/TabsContentAbout";
import TabsContentExperience from "../TabsContent/TabsContentExperience/TabsContentExperience";
import TabsContentEducation from "../TabsContent/TabsContentEducation/TabsContentEducation";
import BasicButton from "../Buttons/BasicButton/BasicButton";
import DownloadConfirmationModal from "../ModalBar/DownloadConfirmationModal/DownloadConfirmationModal";

import PdfPortafolio from "../../../public/pdf/Hoja_de_Vida_Carolina_UB.pdf"

const Profile = () => {
  const { lang } = useTranslations();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadConfirmation = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDownload = () => {
    if (isModalOpen) {
      setIsModalOpen(false);

      fetch(PdfPortafolio)
        .then((res) => res.blob())
        .then((blob) => {
          // Crear un objeto URL para el Blob
          const url = window.URL.createObjectURL(blob);

          // Crear un enlace temporal
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "CV_Carolina_UB.pdf");

          // Simular un clic en el enlace para iniciar la descarga
          document.body.appendChild(link);
          link.click();

          // Liberar recursos
          window.URL.revokeObjectURL(url);
          document.body.removeChild(link);
        })
        .catch((error) => {
          // Manejar errores de descarga
          console.error("Error al descargar el archivo:", error);
        });
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
