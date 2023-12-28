/* eslint-disable react/prop-types */
import { useState } from "react";
import { Tabs, Tab} from "@mui/material";
import styled from "@emotion/styled";

const AntTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#3857BF",
    height: "1.5px",
  },
});

const TabsBar = ({
  titleTab1,
  titleTab2,
  titleTab3,
  content1,
  content2,
  content3,
}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="w-full flex justify-center">
        <AntTabs
          value={value}
          onChange={handleChange}
          aria-label="Custom Tabs"
          textColor="inherit"
        >
          <Tab label={titleTab1} className="text-blue" />
          <Tab label={titleTab2} className="text-blue" />
          <Tab label={titleTab3} className="text-blue" />
        </AntTabs>
      </div>
      {/* Contenido de las pestañas */}
      <div className="py-10 md:w-[50rem]">
        {value === 0 && <div>{content1}</div>}
        {value === 1 && <div>{content2}</div>}
        {value === 2 && <div>{content3}</div>}
      </div>
    </div>
  );
};

export default TabsBar;
