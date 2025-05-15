import { Grid, Paper, styled, Typography } from "@mui/material";
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: "8px",
  position: "relative",
  cursor: "pointer",
  height: 400,
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
  products: [{ pr_image: string; pr_price: number }];
}) {
  return (
    <>
      {products.map(
        (product: { pr_image: string; pr_price: number }, index: number) => {
          return (
            <Grid key={index.toString()} size={3}>
              <Link href={"/product/post-1/"} passHref>
                <Item sx={{ backgroundImage: `url(${product.pr_image})` }}>
                  <Typography
                    variant="h6"
                    color="#fff"
                    position={"absolute"}
                    bottom={0}
                  >
                    Azzaro The Most Wanted Eau De Parfum Intense For Men
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
