// app/components/BottleSizeSelector.tsx
"use client";

import {
  ToggleButtonGroup,
  ToggleButton,
  Typography,
  Box,
} from "@mui/material";
import { useState } from "react";

export default function BottleSizeSelector({
  sizes,
  defaultSize = "",
}: {
  sizes: string[];
  defaultSize?: string;
}) {
  const [selectedSize, setSelectedSize] = useState(defaultSize || sizes[0]);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newSize: string | null
  ) => {
    if (newSize !== null) {
      setSelectedSize(newSize);
    }
  };

  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="body1" fontWeight={600} mb={1}>
        Size
      </Typography>
      <ToggleButtonGroup
        value={selectedSize}
        exclusive
        onChange={handleChange}
        fullWidth
        sx={{
          gap: 0.5,
          display: "flex",
          justifyContent: "space-between",
          "& .MuiToggleButtonGroup-middleButton": {
            borderLeft: "1px solid #ccc",
          },
        }}
      >
        {sizes.map((size) => (
          <ToggleButton
            key={size}
            value={size}
            aria-label={size}
            sx={{
              flex: 1,
              border: "1px solid #ccc",
              borderRadius: "4px !important",
              textTransform: "none",
              fontWeight: 500,
              px: 2,
              //   mx: 0.5,

              "&.Mui-selected": {
                backgroundColor: "#000",
                color: "#fff",
                borderColor: "#000",
              },
            }}
          >
            {size}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
}
