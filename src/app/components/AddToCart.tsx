"use client";
import { Grid, Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useDrawer } from "../context/DrawerContext";
import { Product, useCart } from "../context/CartContext";

export const AddToCart = ({
  selectedproduct,
}: {
  selectedproduct: Product;
}) => {
  const { openDrawer } = useDrawer();
  const { addToCart } = useCart();
  const onCartClick = () => {
    addToCart(selectedproduct);
    openDrawer();
  };
  return (
    <Grid container>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        sx={{ marginBottom: "10px" }}
        onClick={onCartClick}
      >
        Add to Cart
      </Button>
      {/* Connect to WhatsApp button */}
      <Button
        fullWidth
        variant="contained"
        color="primary"
        startIcon={<WhatsAppIcon />}
      >
        Connect to WhatsApp
      </Button>
    </Grid>
  );
};
