"use client";
import { Drawer } from "@mui/material";
import { useEffect, useState } from "react";

export default function Cart() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const toggleDrawer = () => () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  useEffect(() => {
    setIsDrawerOpen(true);
  }, []);
  return (
    <>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer()}
        sx={{ width: 350 }} // Set the width here
      >
        {" "}
        <div
          role="presentation"
          onClick={toggleDrawer()}
          //   onKeyDown={toggleDrawer()}
          style={{ width: 350 }} // Or set the width here
        >
          <p>Cart Content</p>{" "}
        </div>{" "}
      </Drawer>
    </>
  );
}
