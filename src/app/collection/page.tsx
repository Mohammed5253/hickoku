import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Grid, Typography } from "@mui/material";
import ProductsItem from "../components/ProductsItem";
import { PRODUCTS } from "@/app/utils/constant";
import FilterComponent from "../components/FilterComponent";
import Link from "next/link";

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
