"use client";
import { Grid, Paper, styled, Typography } from "@mui/material";
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: "8px",
  position: "relative",
  cursor: "pointer",
  height: 450,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
  "&:hover": {
    backgroundImage: `url('/images/image2.jfif')`,
  },
}));

export default function ProductsItem({
  products,
}: {
  products: { pr_image: string; pr_price: number; pr_name: string }[];
}) {
  return (
    <>
      {products.map(
        (
          product: { pr_image: string; pr_price: number; pr_name: string },
          index: number
        ) => {
          return (
            <Grid
              key={index.toString()}
              size={{ xs: 6, md: 4, lg: 3, xl: 3, sm: 6 }}
            >
              <Link href={"/product/post-1/"} passHref>
                <Item
                  sx={{
                    backgroundImage: `url(${product.pr_image})`,
                    backgroundSize: "100% 100%",
                    padding: 0,
                  }}
                >
                  <Typography
                    variant="h6"
                    color="#fff"
                    position={"absolute"}
                    bottom={0}
                    fontWeight={"bold"}
                    sx={{
                      backgroundColor: "#c6a400",
                      opacity: 0.9,
                    }}
                  >
                    {product.pr_name}
                  </Typography>
                  <Typography
                    sx={{ textAlign: "center" }}
                    variant="h6"
                    position={"absolute"}
                    top={0}
                    color="#fff"
                  >
                    {" "}
                    Rs. {product.pr_price}
                  </Typography>
                </Item>
              </Link>
            </Grid>
          );
        }
      )}
    </>
  );
}
