"use client";
import { Chip } from "@mui/material";

export default function FilterComponent() {
  const handleClick = () => {
    console.log("Chip Clicked");
  };
  return (
    <>
      <Chip label="Fileters | Sort By" onClick={() => handleClick} />
    </>
  );
}
