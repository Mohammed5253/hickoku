"use client";
import { useState } from "react";
import { Chip } from "@mui/material";
import FilterDrawer from "./FilterComponent/FilterDrawer";

export default function FilterComponent() {
  const [filterOpen, setFilterOpen] = useState(false);
  const handleClick = () => {
    // console.log("Filter Chip Clicked");
    setFilterOpen(true);
  };
  return (
    <>
      <Chip label="Fileters | Sort By" onClick={handleClick} />
      <FilterDrawer open={filterOpen} onClose={() => setFilterOpen(false)} />
    </>
  );
}
