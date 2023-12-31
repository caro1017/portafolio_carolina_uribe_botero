/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import { Modal, Button, IconButton } from "@mui/material";
import { Images } from "../../../images/Images";

const ProjectContentModal = ({
  open,
  onClose,
  nameProjects,
  description,
  technology,
  imgScreens,
  urlDemo,
  urlFigma,
  urlGitHub,
}) => {
  const buttons = [
    {
      label: "Demo",
      url: urlDemo,
      icon: <i className="bx bx-link-external" />,
    },
    { label: "Figma", url: urlFigma, icon: <i className="bx bxl-figma" /> },
    { label: "GitHub", url: urlGitHub, icon: <i className="bx bxl-github" /> },
  ];

  return (
    <Modal
      open={open}
      onClose={onClose}
      className="flex items-center justify-center"
    >
      <div className="bg-white dark:bg-black p-10 rounded-md w-[22rem] md:w-[30rem] text-center">
        <div className="relative">
          <IconButton
            size="small"
            className="absolute right-0"
            onClick={onClose}
          >
            <i className="bx bx-x text-blue text-2xl" />
          </IconButton>
        </div>

        <div className="text-center">
          <h1 className="font-['Bahiana'] text-4xl md:text-5xl px-10">
            {nameProjects}
          </h1>
          <img
            src={Images.lightLineCurve}
            alt="Linea resalta"
            className="max-w-screen-lg mx-auto"
          />

          <p className="mt-5 text-xs md:text-sm dark:text-greyOpacity mx-10">
            {description}
          </p>

          <p className="mt-5 text-xs md:text-sm text-blue">{technology}</p>

          <div className="w-60 md:w-72 mx-auto py-10">
            <img
              src={imgScreens}
              alt={nameProjects}
              className="flex justify-center"
            />
          </div>
        </div>

        <div className="flex justify-center space-x-2">
          {buttons.map(
            ({ label, url, icon }, index) =>
              url && (
                <a key={index} href={url} target="_blank">
                  <Button
                    key={index}
                    size="small"
                    variant="outlined"
                    endIcon={icon}
                    className="text-blue border border-blue hover:border-blueOpacity"
                  >
                    {label}
                  </Button>
                </a>
              )
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ProjectContentModal;
