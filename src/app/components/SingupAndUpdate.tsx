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
          {"SIGN UP FOR HICKOKU UPDATES"}
          <br />
          <br />
          {`Be in the know about what's happening at the Parisian Maison: never miss out on the latest trends, newest collections and exciting special projects from Balmain.`}
        </Typography>
        <br />
        <Typography component={"span"}>
          {`Pierre Balmain processes the data collected to send you our newsletter. To find out more about how we manage your personal data and to exercise your rights, please refer to our privacy policy.`}
          <br />
          <br />
          {`*Mandatory information: If you choose not to give your consent for the collection of mandatory data you will not be able to subscribe to the newsletter.`}
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
