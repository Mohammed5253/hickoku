"use client";
import { Box, Grid, Paper, styled, Typography } from "@mui/material";
import Link from "next/link";

// Styled Product Card
const ProductCard = styled(Paper)(({ theme }) => ({
  position: "relative",
  cursor: "pointer",
  overflow: "hidden",
  borderRadius: "12px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  height: 400,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  backgroundColor: theme.palette.grey[900],
  "&:hover": {
    transform: "scale(1.03)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.4)",
  },
}));

// Styled Image
const ProductImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
});

// Overlay info box
const InfoOverlay = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  background: "rgba(0, 0, 0, 0.6)",
  backdropFilter: "blur(4px)",
  color: "#fff",
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(255,255,255,0.1)",
}));

// Product name
const ProductName = styled(Typography)(({ theme }) => ({
  fontSize: "1.1rem",
  fontWeight: 600,
  marginBottom: theme.spacing(0.5),
  textAlign: "left",
}));

// Product price
const ProductPrice = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: 500,
  textAlign: "left",
  color: theme.palette.primary.light,
}));

// Main component
export default function ProductsItem({
  products,
}: {
  products: {
    pr_image: string;
    pr_price: number;
    pr_name: string;
    pr_id: number;
  }[];
}) {
  return (
    <Grid container spacing={3}>
      {products.map((product, index) => (
        <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Link href={`/product/${product.pr_id}/`} passHref>
            <ProductCard>
              <ProductImage src={product.pr_image} alt={product.pr_name} />
              <InfoOverlay>
                <ProductName>{product.pr_name}</ProductName>
                <ProductPrice>Rs. {product.pr_price}</ProductPrice>
              </InfoOverlay>
            </ProductCard>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
