import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Images } from "../../images/Images";

import ThemeBar from "../../components/ThemeBar/ThemeBar";
import SoundBar from "../../components/SoundBar/SoundBar";
import { SelectLenguages } from "../../components/SelectLenguages/SelectLenguages";
import useTranslations from "../../hooks/useTranslations";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { lang } = useTranslations();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const generateMenuItems = () => {
    return [
      { label: lang.navbar.about, link: "#about" },
      { label: lang.navbar.projects, link: "#projects" },
      { label: lang.navbar.contact, link: "#contactMe" },
    ].map((item, index) => (
      <a
        key={index}
        href={item.link}
        onClick={() => handleMenuItemClick(item.link)}
      >
        <MenuItem>{item.label}</MenuItem>
      </a>
    ));
  };

  const handleMenuItemClick = (link) => {
    handleClose(); // Cierra el menú después de hacer clic en un elemento
    window.location.href = link; // Redirige a la sección correspondiente
  };

  const Logo = () => {
    return (
      <div>
        <img
          src={Images.lightLogo}
          alt="Logo Portafolio"
          className="block mb-1 w-14"
        />
        <img
          src={Images.lightLineCurve}
          alt="Linea resalta logo"
          className="block w-14"
        />
      </div>
    );
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-screen-lg w-full ml-32 md:ml-52">
          <div className="text-center py-16">
            <div className="flex justify-center">
              <Logo />
            </div>

            <div className="uppercase space-x-4 tracking-wide text-sm mt-4 hidden md:flex md:justify-center font-medium">
              <a
                href="#about"
                className="hover:underline hover:decoration-wavy"
              >
                {lang.navbar.about}
              </a>
              <a
                href="#projects"
                className="hover:underline hover:decoration-wavy "
              >
                {lang.navbar.projects}
              </a>
              <a
                href="#contactMe"
                className="hover:underline hover:decoration-wavy "
              >
                {lang.navbar.contact}
              </a>
            </div>
          </div>
        </div>

        <div className="ml-auto flex space-x-1 pr-5 md:p-10">
          <div className="mt-1">
            <SelectLenguages />
          </div>
          <div>
            <ThemeBar />
          </div>
          <div>
            <SoundBar />
          </div>
        </div>
      </div>

      {/* Single conditional block for mobile menu */}
      {open && (
        <div className="fixed md:hidden -mt-40">
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            PaperProps={{
              className: "dark:bg-black text-grey",
            }}
          >
            {generateMenuItems(handleClose)}
          </Menu>
        </div>
      )}

      {/* Mobile menu toggle button */}
      <div className="absolute md:hidden -mt-40">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <i className="bx bx-menu-alt-left text-2xl text-grey" />
        </Button>
      </div>
    </>
  );
};

export default NavBar;
