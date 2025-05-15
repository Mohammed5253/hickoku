"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProductInformaionSection from "./ProductInformationSection";
import ProductContactSection from "./ProductContactSection";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ProductTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} mt={5}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="DESCRIPTION" {...a11yProps(0)} />
          <Tab label="DELIVERY & RETURNS" {...a11yProps(1)} />
          <Tab label="CONTACTS" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <pre>
          {`Calfskin Anthem Medium bag

Soft belted style
Carry in the hand or wear on the shoulder
Leather and chain handle
Leather belt and belt loops
Metal PB-engraved buckle
Metal PB logo on the back
Press-stud fastening
Embossed leather inside card pocket
Gold hardware
Dimensions: 43 x 20 x 14 cm
Main material: 100% calfskin
Made in Italy
Item: EN0KK990LMXL`}
        </pre>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ProductInformaionSection />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ProductContactSection />
      </CustomTabPanel>
    </Box>
  );
}
