/* eslint-disable react/prop-types */
import { Modal, Button } from "@mui/material";
import useTranslations from "../../../hooks/useTranslations";

const DownloadConfirmationModal = ({ open, onClose, onConfirmDownload }) => {
  const { lang } = useTranslations();

  return (
    <Modal
      open={open}
      onClose={onClose}
      className="flex items-center justify-center"
    >
      <div className="bg-white dark:bg-black p-10 rounded-md w-[22rem] text-center ">
        <h2 className="text-sm font-bold mb-4 text-blue">
          {lang.modalDownload.thankYou}
        </h2>
        <p className="mb-4 text-sm">{lang.modalDownload.confirmation}</p>
        <div className="flex justify-center py-5 space-x-8">
          <Button
            onClick={onClose}
            variant="outlined"
            className=" text-blue border border-blue hover:border-blueOpacity "
          >
            {lang.titleButton.cancel}
          </Button>
          <Button
            onClick={onConfirmDownload}
            variant="contained"
            className=" dark:text-black border bg-blue hover:bg-blue "
          >
            {lang.titleButton.accept}
          </Button>
        </div>
        <p className="text-xs text-blueOpacity">
          {lang.modalDownload.observation}
        </p>
      </div>
    </Modal>
  );
};

export default DownloadConfirmationModal;
