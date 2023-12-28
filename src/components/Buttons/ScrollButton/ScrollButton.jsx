import { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    // Usamos requestAnimationFrame para optimizar el evento de scroll
    requestAnimationFrame(() => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showButton && (
        <div className="fixed bottom-24 right-4">
          <Fab
            size="small"
            className="bg-blueOpacity hover:bg-blueOpacity  "
            onClick={scrollToTop}
          >
            <KeyboardArrowUpIcon className="dark:text-black text-white" />
          </Fab>
        </div>
      )}
    </>
  );
};

export default ScrollButton;
