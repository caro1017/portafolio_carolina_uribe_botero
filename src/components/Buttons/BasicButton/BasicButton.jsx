/* eslint-disable react/prop-types */
import { Button } from "@mui/material";

const BasicButton = ({icon, title}) => {
  return (
    <Button variant="outlined" endIcon={icon} className=" text-blue border border-blueOpacity hover:border-blueOpacity ">
      {title}
    </Button>
  );
};

export default BasicButton;
