import { Box, Button, Grid, Typography } from "@mui/material";
import styles from "./page.module.css";
import HickokuCulture from "./components/HickokuCulture";
import SingupAndUpdate from "./components/SingupAndUpdate";
import ExtraInfo from "./components/ExtraInfo";
import Link from "next/link";

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   textAlign: "center",
//   color: (theme.vars ?? theme).palette.text.secondary,
//   ...theme.applyStyles("dark", {}),
// }));
export const metadata = {
  title: "Hickoku - The Perfume for every ocassion",
  description: `A scent is more than an aroma—it is a story whispered on the skin, a lingering memory in the air, a signature of sophistication. At Hickoku, we craft exquisite fragrances that transcend time, capturing the essence of grace, allure, and opulence in every drop.
Each bottle is a masterpiece, blending the world’s most precious essences with unparalleled artistry. From the first delicate note to the final, lingering trail, Hickoku Perfumes are an invitation to indulge in luxury, to embrace elegance, and to leave an unforgettable impression.
Your scent. Your signature. Your legacy.Step into a world of refinement—welcome to Hickoku.`,
};

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
          className={styles.miniBanner3}
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
              Hickoku Rouge – A Bold Affair of Passion & Power
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
              For Him
            </Button>
          </Box>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          borderRadius={"8px"}
          className={styles.miniBanner4}
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
              Hickoku Alchemy – The Hot Soul
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
