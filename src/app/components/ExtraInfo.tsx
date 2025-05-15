import { Grid } from "@mui/material";

export default function ExtraInfo() {
  return (
    <Grid m={"20px"} container spacing={2} sx={{ backgroundColor: "#fff" }}>
      <Grid size={4}>{"hello"}</Grid>
      <Grid size={4}>{"hello"}</Grid>
      <Grid size={4}>{"hello"}</Grid>
    </Grid>
  );
}
