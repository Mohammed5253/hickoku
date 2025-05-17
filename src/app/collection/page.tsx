import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Grid, Typography } from "@mui/material";
import ProductsItem from "../components/ProductsItem";
import { PRODUCTS } from "@/app/utils/constant";
import FilterComponent from "../components/FilterComponent";
import Link from "next/link";

export const metadata = {
  title: "Hickoku - The Perfume Collection",
  description: `A scent is more than an aroma—it is a story whispered on the skin, a lingering memory in the air, a signature of sophistication. At Hickoku, we craft exquisite fragrances that transcend time, capturing the essence of grace, allure, and opulence in every drop.
Each bottle is a masterpiece, blending the world’s most precious essences with unparalleled artistry. From the first delicate note to the final, lingering trail, Hickoku Perfumes are an invitation to indulge in luxury, to embrace elegance, and to leave an unforgettable impression.
Your scent. Your signature. Your legacy.Step into a world of refinement—welcome to Hickoku.`,
};
export default function Product() {
  return (
    <>
      <Grid
        m={"20px"}
        container
        flexDirection={"column"}
        columnSpacing={2}
        rowSpacing={2}
      >
        <Grid>
          <Link href={"/"} passHref>
            <ChevronLeftIcon />
          </Link>
        </Grid>
        <Grid mt={"20px"}>
          <Typography component={"h1"} fontSize={"30px"} fontWeight={"bold"}>
            COLLECTION
          </Typography>
        </Grid>
        <Grid mt={"10px"}>
          <FilterComponent />
        </Grid>
        <Grid container spacing={2}>
          <ProductsItem products={PRODUCTS} />
        </Grid>
      </Grid>
    </>
  );
}
