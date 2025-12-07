import { Box, Button, Grid, Typography } from "@mui/material";
import styles from "./page.module.css";
import HickokuCulture from "./components/HickokuCulture";
import SingupAndUpdate from "./components/SingupAndUpdate";
import ExtraInfo from "./components/ExtraInfo";
import Link from "next/link";
import ImageSlider from "./components/ImageSlider";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
    <Header />
    < ImageSlider />
      <Grid
        container
        position={"relative"}
        mx={"20px"}
        my={"20px"}
        minHeight={"400px"}
        borderRadius={"8px"}
        columnSpacing={{ xs: 4, sm: 4, md: 4 }}
        rowSpacing={0}
        overflow={"hidden"}
      >
        <Grid size={{ xs: 6, md: 3 }} className={styles.backgroundImage}>
          <Box
            position={"absolute"}
            bottom={0}
            left={0}

            my={"20px"}
            ml={"20px"}
          >
            <Typography component={"h1"} className={styles.imageCaption}>
              ✨ Hickoku Luminous
            </Typography>
            <Typography component={"h1"} className={styles.imageCaption}>
              A Radiant Whisper of Elegance
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
              <Link href={"/collection?filter=luminous"}> Shop Now </Link>
            </Button>
          </Box>
        </Grid>
        <Grid
          size={{ xs: 6, md: 3 }}
          className={styles.backgroundImage2}
        ></Grid>
        <Grid
          size={{ xs: 12, md: 3 }}
          className={styles.miniBanner1}
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
              Hickoku Noire – The Mystery of Midnight
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
              <Link href={"/collection?filter=for-her"}>For Her</Link>
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
              <Link href={"/collection?filter=for-him"}>For Him</Link>
            </Button>
          </Box>
        </Grid>
        <Grid
          size={{ xs: 12, md: 3 }}
          borderRadius={"8px"}
          className={styles.miniBanner2}
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
              Hickoku Élan
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
              <Link href={"/collection?filter=for-her"}>For Her</Link>
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
              <Link href={"/collection?filter=for-her"}>For Him</Link>
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
          className={styles.miniBanner1}
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
              Hickoku Noire – The Mystery of Midnight
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
              <Link href={"/collection?filter=for-her"}>For Her</Link>
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
              <Link href={"/collection?filter=for-him"}>For Him</Link>
            </Button>
          </Box>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          borderRadius={"8px"}
          className={styles.miniBanner2}
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
              Hickoku Élan
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
              <Link href={"/collection?filter=for-her"}>For Her</Link>
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
              <Link href={"/collection?filter=for-her"}>For Him</Link>
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid my={"20px"}>
        <HickokuCulture />
        <SingupAndUpdate />
        <ExtraInfo />
      </Grid>
    </>
  );
}
