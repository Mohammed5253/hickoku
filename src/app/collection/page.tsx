"use client";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Chip, Grid, Typography } from "@mui/material";
import ProductsItem from "../components/ProductsItem";

const PRODUCTS = [
  {
    pr_image: "/images/image1.jfif",
    pr_name: "Azzaro The Most Wanted Eau De Parfum Intense For Men",
    pr_rating: 2,
    pr_price: 2000,
    pr_size: [20, 50, 60, 100],
  },
  {
    pr_image: "/images/image1.jfif",
    pr_name: "Azzaro The Most Wanted Eau De Parfum Intense For Men",
    pr_rating: 2,
    pr_price: 2000,
    pr_size: [20, 50, 60, 100],
  },
  {
    pr_image: "/images/image1.jfif",
    pr_name: "Azzaro The Most Wanted Eau De Parfum Intense For Men",
    pr_rating: 2,
    pr_price: 2000,
    pr_size: [20, 50, 60, 100],
  },
  {
    pr_image: "/images/image1.jfif",
    pr_name: "Azzaro The Most Wanted Eau De Parfum Intense For Men",
    pr_rating: 2,
    pr_price: 2000,
    pr_size: [20, 50, 60, 100],
  },
  {
    pr_image: "/images/image1.jfif",
    pr_name: "Azzaro The Most Wanted Eau De Parfum Intense For Men",
    pr_rating: 2,
    pr_price: 2000,
    pr_size: [20, 50, 60, 100],
  },
  {
    pr_image: "/images/image1.jfif",
    pr_name: "Azzaro The Most Wanted Eau De Parfum Intense For Men",
    pr_rating: 2,
    pr_price: 2000,
    pr_size: [20, 50, 60, 100],
  },
  {
    pr_image: "/images/image1.jfif",
    pr_name: "Azzaro The Most Wanted Eau De Parfum Intense For Men",
    pr_rating: 2,
    pr_price: 2000,
    pr_size: [20, 50, 60, 100],
  },
  {
    pr_image: "/images/image1.jfif",
    pr_name: "Azzaro The Most Wanted Eau De Parfum Intense For Men",
    pr_rating: 2,
    pr_price: 2000,
    pr_size: [20, 50, 60, 100],
  },
  {
    pr_image: "/images/image1.jfif",
    pr_name: "Azzaro The Most Wanted Eau De Parfum Intense For Men",
    pr_rating: 2,
    pr_price: 2000,
    pr_size: [20, 50, 60, 100],
  },
  {
    pr_image: "/images/image1.jfif",
    pr_name: "Azzaro The Most Wanted Eau De Parfum Intense For Men",
    pr_rating: 2,
    pr_price: 2000,
    pr_size: [20, 50, 60, 100],
  },
  {
    pr_image: "/images/image1.jfif",
    pr_name: "Azzaro The Most Wanted Eau De Parfum Intense For Men",
    pr_rating: 2,
    pr_price: 2000,
    pr_size: [20, 50, 60, 100],
  },
  {
    pr_image: "/images/image1.jfif",
    pr_name: "Azzaro The Most Wanted Eau De Parfum Intense For Men",
    pr_rating: 2,
    pr_price: 2000,
    pr_size: [20, 50, 60, 100],
  },
];

export default function Product() {
  const handleClick = () => {
    console.log("Chip Clicked");
  };
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
          <ChevronLeftIcon />
        </Grid>
        <Grid mt={"20px"}>
          <Typography component={"h1"} fontSize={"30px"} fontWeight={"bold"}>
            COLLECTION
          </Typography>
        </Grid>
        <Grid mt={"10px"}>
          <Chip label="Fileters | Sort By" onClick={() => handleClick} />
        </Grid>
        <Grid container spacing={2}>
          <ProductsItem products={PRODUCTS} />
        </Grid>
      </Grid>
    </>
  );
}
