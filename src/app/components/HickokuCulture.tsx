"use client";

import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const images = [
  {
    title: "Luminous",
    imageUrl: "/hickoku/culture-7.jpeg",
    productUrl: "/product/1",
  },
  {
    title: "Noire",
    imageUrl: "/hickoku/culture-2.jpeg",
    productUrl: "/product/2",
  },
  {
    title: "Fleur Royale",
    imageUrl: "/hickoku/culture-3.jpeg",
    productUrl: "/product/3",
  },
  {
    title: "Ember",
    imageUrl: "/hickoku/culture-5.jpeg",
    productUrl: "/product/4",
  },
  {
    title: "Élan",
    imageUrl: "/hickoku/culture-6.jpeg",
    productUrl: "/product/5",
  },
];

export default function HickokuCulture() {
  const [parentBgImage, setParentBgImage] = useState("");
  return (
    <Grid
      sx={{
        backgroundImage: `url(${parentBgImage})`,
        backgroundColor: parentBgImage === "" ? "#fff" : null,
      }}
      mx={"20px"}
      pt={"40px"}
      borderRadius={"8px"}
    >
      <Box>
        <Typography
          component={"h1"}
          align="center"
          fontWeight={"bold"}
          fontSize={"40px"}
          mb={"20px"}
          color={parentBgImage ? "#fff" : "#000"}
        >
          {"HICKOKU CULTURE"}
        </Typography>
      </Box>
      <Box
        sx={{
          // width: "100%",
          // minHeight: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // padding: 4
        }}
      >
        {/* Parent Box with dynamic background */}
        <Box
          sx={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "background-image 0.5s ease-in-out",
            px: { xs: 1, sm: 2 },
            py: { xs: 2, sm: 4 },
            display: "flex",
            gap: { xs: 2, sm: 2 },
            flexWrap: "wrap", // allow wrapping for smaller screens
            justifyContent: "center",
            width: "100%",
            minHeight: { xs: "200px", sm: "300px" },
          }}
        >
          {images.map((item, index) => (
            <Link
              href={item.productUrl}
              key={index}
              style={{ textDecoration: "none" }}
            >
              <Box
                key={index}
                onMouseEnter={() => setParentBgImage(item.imageUrl)}
                onMouseLeave={() => setParentBgImage("")}
                sx={{
                  width: {
                    xs: "40vw", // 2 items per row on extra-small screens
                    sm: "30vw", // 3 items per row on small screens
                    md: "200px", // fixed size on medium and above
                  },
                  height: {
                    xs: "40vw",
                    sm: "30vw",
                    md: "200px",
                  },
                  maxWidth: "206px",
                  maxHeight: "206px",
                  borderRadius: "50%",
                  backgroundImage: `url(${item.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  cursor: "pointer",
                  boxShadow: 3,
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    ".imageName": {
                      color: "#fff",
                    },
                  },
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  position: "relative",
                  margin: 1,
                }}
              >
                <Typography
                  className="imageName"
                  variant="caption"
                  fontWeight="bold"
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "16px",
                      md: "20px",
                    },
                    position: "absolute",
                    bottom: -30,
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Grid>
  );
}
