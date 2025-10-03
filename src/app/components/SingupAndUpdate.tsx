import { Grid, Typography } from "@mui/material";

export default function SingupAndUpdate() {
  return (
    <Grid
      m={"20px"}
      pt={"40px"}
      borderRadius={"8px"}
      display={"flex"}
      flexDirection={"row"}
      sx={{ backgroundColor: "#fff" }}
      p={"10px"}
      container
      spacing={1}
    >
      <Grid size={6}>
        <Typography fontSize={"16px"} fontWeight={700}>
          {"Hickoku – The Fragrance of Timeless Elegance"}
          <br />
          <br />
          {`A scent is more than an aroma—it is a story whispered on the skin, a lingering memory in the air, a signature of sophistication. At Hickoku, we craft exquisite fragrances that transcend time, capturing the essence of grace, allure, and opulence in every drop.`}
        </Typography>
        <br />
        <Typography component={"span"}>
          {`Each bottle is a masterpiece, blending the world’s most precious essences with unparalleled artistry. From the first delicate note to the final, lingering trail, Hickoku Perfumes are an invitation to indulge in luxury, to embrace elegance, and to leave an unforgettable impression.`}
        </Typography>
        <br />
        <Typography
          fontSize={"16px"}
          fontWeight={700}
        >{`Your scent. Your signature. Your legacy.`}</Typography>
        <br />

        <Typography fontSize={"16px"} fontWeight={700}>
          {"Step into a world of refinement—welcome to Hickoku."}

          <br />
        </Typography>
      </Grid>
      <Grid
        size={6}
        sx={{
          // width: "100%",
          // minHeight: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // padding: 4
        }}
      >
        {"Parent Box with dynamic background"}
      </Grid>
    </Grid>
  );
}
