/* eslint-disable react/prop-types */
import { IconButton } from "@mui/material";

const IconButtonCustom = ({ size, ariaLabel, icon, className }) => {
  return (
    <>
      <IconButton
        size={size}
        aria-label={ariaLabel}
        className={`block ${className}`}
      >
        {icon}
      </IconButton>
    </>
  );
};

export default IconButtonCustom;
