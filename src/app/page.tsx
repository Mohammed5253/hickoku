"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
import styles from "./page.module.css";
import HickokuCulture from "./components/HickokuCulture";
import SingupAndUpdate from "./components/SingupAndUpdate";
import ExtraInfo from "./components/ExtraInfo";

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   textAlign: "center",
//   color: (theme.vars ?? theme).palette.text.secondary,
//   ...theme.applyStyles("dark", {}),
// }));

export default function Home() {
  return (
    <>
      <Grid
        container
        position={"relative"}
        rowSpacing={0}
        minHeight={"498px"}
        borderRadius={"8px"}
        overflow={"hidden"}
        columnSpacing={{ xs: 1, sm: 2, md: 0 }}
        my={"20px"}
        mx={"20px"}
      >
        <Grid size={{ xs: 12, md: 6 }} className={styles.backgroundImage}>
          <Box
            position={"absolute"}
            bottom={0}
            left={0}
            my={"20px"}
            ml={"20px"}
          >
            <Typography component={"h1"} className={styles.imageCaption}>
              ANTHEM BAGS
            </Typography>
            <Typography component={"h1"} className={styles.imageCaption}>
              SPRING - SUMMER 2025
            </Typography>
            <Button
              variant="outlined"
              sx={{
                marginTop: "20px",
                width: "180px",
                borderRadius: "20px",
                backgroundColor: "#fff",
                fontSize: "14px",
                color: "#000",
              }}
            >
              Shop Now
            </Button>
          </Box>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          className={styles.backgroundImage2}
        ></Grid>
      </Grid>
      <Grid
        container
        position={"relative"}
        mx={"20px"}
        mb={"20px"}
        minHeight={"490px"}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid
          size={{ xs: 12, md: 6 }}
          borderRadius={"8px"}
          className={styles.backgroundImage}
          position={"relative"}
        >
          <Box
            position={"absolute"}
            bottom={0}
            left={0}
            my={"20px"}
            ml={"20px"}
          >
            <Typography component={"h1"} className={styles.imageCaption}>
              GIFT GUIDE
            </Typography>
            <Button
              variant="outlined"
              sx={{
                marginTop: "20px",
                width: "130px",
                borderRadius: "20px",
                backgroundColor: "#fff",
                fontSize: "14px",
                color: "#000",
                height: "29px",
                marginRight: "10px",
              }}
            >
              For Her
            </Button>
            <Button
              variant="outlined"
              sx={{
                marginTop: "20px",
                width: "130px",
                borderRadius: "20px",
                backgroundColor: "#fff",
                fontSize: "14px",
                color: "#000",
                height: "29px",
              }}
            >
              For Him
            </Button>
          </Box>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          borderRadius={"8px"}
          className={styles.backgroundImage}
          position={"relative"}
        >
          <Box
            position={"absolute"}
            bottom={0}
            left={0}
            my={"20px"}
            ml={"20px"}
          >
            <Typography component={"h1"} className={styles.imageCaption}>
              HICKOKU ESSENTIALS
            </Typography>
            <Button
              variant="outlined"
              sx={{
                marginTop: "20px",
                width: "130px",
                borderRadius: "20px",
                backgroundColor: "#fff",
                fontSize: "14px",
                color: "#000",
                height: "29px",
                marginRight: "10px",
              }}
            >
              For Her
            </Button>
            <Button
              variant="outlined"
              sx={{
                marginTop: "20px",
                width: "130px",
                borderRadius: "20px",
                backgroundColor: "#fff",
                fontSize: "14px",
                color: "#000",
                height: "29px",
              }}
            >
              For Him
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        position={"relative"}
        mx={"20px"}
        mb={"20px"}
        minHeight={"490px"}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid
          size={{ xs: 12, md: 6 }}
          borderRadius={"8px"}
          className={styles.backgroundImage}
          position={"relative"}
        >
          <Box
            position={"absolute"}
            bottom={0}
            left={0}
            my={"20px"}
            ml={"20px"}
          >
            <Typography component={"h1"} className={styles.imageCaption}>
              SNEAKERS
            </Typography>
            <Button
              variant="outlined"
              sx={{
                marginTop: "20px",
                width: "130px",
                borderRadius: "20px",
                backgroundColor: "#fff",
                fontSize: "14px",
                color: "#000",
                height: "29px",
                marginRight: "10px",
              }}
            >
              For Her
            </Button>
            <Button
              variant="outlined"
              sx={{
                marginTop: "20px",
                width: "130px",
                borderRadius: "20px",
                backgroundColor: "#fff",
                fontSize: "14px",
                color: "#000",
                height: "29px",
              }}
            >
              For Him
            </Button>
          </Box>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          borderRadius={"8px"}
          className={styles.backgroundImage}
          position={"relative"}
        >
          <Box
            position={"absolute"}
            bottom={0}
            left={0}
            my={"20px"}
            ml={"20px"}
          >
            <Typography component={"h1"} className={styles.imageCaption}>
              SPRING - SUMMER 2025
            </Typography>
            <Button
              variant="outlined"
              sx={{
                marginTop: "20px",
                width: "130px",
                borderRadius: "20px",
                backgroundColor: "#fff",
                fontSize: "14px",
                color: "#000",
                height: "29px",
                marginRight: "10px",
              }}
            >
              For Her
            </Button>
            <Button
              variant="outlined"
              sx={{
                marginTop: "20px",
                width: "130px",
                borderRadius: "20px",
                backgroundColor: "#fff",
                fontSize: "14px",
                color: "#000",
                height: "29px",
              }}
            >
              For Him
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid my={"20px"}>
        <HickokuCulture />
        <SingupAndUpdate />
        <ExtraInfo />s
      </Grid>
    </>
  );
}
