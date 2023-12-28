/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import { IconButton } from "@mui/material";

const IconButtonCustom = ({ size, ariaLabel, icon, className, href }) => {
  return (
    <>
      <a href={href} target="_blank">
        <IconButton
          size={size}
          aria-label={ariaLabel}
          className={`block ${className}`}
        >
          {icon}
        </IconButton>
      </a>
    </>
  );
};

export default IconButtonCustom;
