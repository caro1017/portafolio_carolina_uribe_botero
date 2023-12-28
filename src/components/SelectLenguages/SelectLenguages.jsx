import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useTranslations from "../../hooks/useTranslations";

export const SelectLenguages = () => {
  const { spanish, english, lang } = useTranslations();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState(
    lang.current.toUpperCase()
  );
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option) => {
    if (option === "es") {
      spanish(() => setSelectedOption("ES"));
    } else if (option === "en") {
      english(() => setSelectedOption("EN"));
    }
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon className="text-grey" />}
        className="text-grey tracking-wide"
      >
        {selectedOption}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)} // Cerrar el menú directamente
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        PaperProps={{
          className: "dark:bg-black text-grey",
        }}
        className="mt-2"
      >
        <MenuItem onClick={() => handleClose("es")}>ES</MenuItem>
        <MenuItem onClick={() => handleClose("en")}>EN</MenuItem>
      </Menu>
    </div>
  );
};
