// components/RightSidebar.tsx
import React from "react";
import { Drawer, Box } from "@mui/material";

const RightSidebar = ({ open, onClose }: { open: boolean; onClose: any }) => {
  return (
    <Drawer variant="temporary" anchor="right" open={open} onClose={onClose}>
      <Box p={2} width={250}>
        {/* Right sidebar content, e.g., cart details */}
        <h2>Cart</h2>
        {/* Add more content here */}
      </Box>
    </Drawer>
  );
};

export default RightSidebar;
