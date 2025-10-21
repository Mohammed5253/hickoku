import React from "react";
import { Box, Grid, Stack, Typography, IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";

const OpenMenuListing = () => {
  const categories = [
    "Men",
    "Women",
    "Unisex",
    "Gift",
    "Apparel",
    "Accessories",
  ];

  return (
    <Box
      sx={{
        p: 2,
        // maxWidth: 300,
        width: "100%",
        position: "relative", // anchor point for absolute child
        height: "100%",
      }}
    >
      {/* Row 1: Login & Icons */}
      <Grid container alignItems="center">
        <Grid size={{ xs: 6 }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <PersonIcon fontSize="small" />
            <Link href="/register ">Login</Link>
          </Stack>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Stack direction="row" spacing={1} justifyContent="flex-end">
            <IconButton size="small">
              <SearchIcon />
            </IconButton>
            <IconButton size="small">
              <ShoppingCartIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>

      {/* Row 2: Categories */}
      <Box mt={3}>
        <Stack spacing={1}>
          {categories.map((category) => (
            <Typography
              key={category}
              variant="body1"
              fontWeight="bold"
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              {category}
            </Typography>
          ))}
        </Stack>
      </Box>

      {/* Row 3: Location - absolutely positioned at bottom */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <LocationOnIcon fontSize="small" />
          <Typography variant="body2">USA</Typography>
        </Stack>
        <Typography variant="caption" color="text.secondary" ml={3}>
          123456
        </Typography>
      </Box>
    </Box>
  );
};

export default OpenMenuListing;
