"use client";

import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";

const images = [
  { title: "Nature", imageUrl: "/images/image1.jfif" },
  { title: "Ocean", imageUrl: "/images/image2.jfif" },
  { title: "Mountains", imageUrl: "/images/image1.jfif" },
  { title: "Desert", imageUrl: "/images/image2.jfif" },
  { title: "Forest", imageUrl: "/images/image1.jfif" },
];

export default function HickokuCulture() {
  const [parentBgImage, setParentBgImage] = useState("");

  return (
    <Grid
      sx={{
        backgroundImage: `url(${parentBgImage})`,
        backgroundColor: !parentBgImage ? "#fff" : null,
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
            // backgroundImage: `url(${parentBgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "background-image 0.5s ease-in-out",
            padding: 2,
            display: "flex",
            gap: 1,
            flexWrap: "nowrap",
            justifyContent: "space-evenly",
            width: "100%",
            //   maxWidth: 1000,
            minHeight: "300px",
          }}
        >
          {images.map((item, index) => (
            <Box
              key={index}
              onMouseEnter={() => setParentBgImage(item.imageUrl)}
              onMouseLeave={() => setParentBgImage("")}
              sx={{
                width: "206px",
                height: "206px",
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
              }}
            >
              <Typography
                className="imageName"
                variant="caption"
                fontWeight={"bold"}
                fontSize={"24px"}
                sx={{
                  position: "absolute",
                  bottom: -40,
                  textAlign: "center",
                  width: "100%",
                }}
              >
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Grid>
  );
}
