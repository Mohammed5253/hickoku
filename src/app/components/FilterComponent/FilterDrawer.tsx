// components/RightSidebar.tsx
import React from "react";
import { Drawer, Box } from "@mui/material";
import CustomizedAccordions from "./FilterCategoriesAccordian";

export const FilterDrawer = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  // console.log("Filter Drawer Open:", open);
  return (
    <Drawer variant="temporary" anchor="right" open={open} onClose={onClose}>
      <Box p={2} width={"650px"}>
        {/* Right sidebar content, e.g., cart details */}
        <h2>Filter</h2>
        <CustomizedAccordions />
      </Box>
    </Drawer>
  );
};

export default FilterDrawer;
