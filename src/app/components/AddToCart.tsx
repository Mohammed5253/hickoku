"use client";
import { Grid, Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useDrawer } from "../context/DrawerContext";
import { Product, useCart } from "../context/CartContext";
import { useProduct } from "../context/ProductContext";

export const AddToCart = ({
  selectedproduct,
}: {
  selectedproduct: Product;
}) => {
  const { openDrawer } = useDrawer();
  const { addToCart } = useCart();
  const { selectedProductSize } = useProduct();
  console.log("selectedProductSize", selectedProductSize);
  const onCartClick = () => {
    selectedproduct.size = selectedProductSize[0]?.size || 0;
    addToCart(selectedproduct);
    openDrawer();
  };
  const message = encodeURIComponent(`
Hello! I want to place an order:

🛒 Product: ${selectedproduct.name}
💵 Price: ${selectedproduct.price}
quantity: ${selectedproduct.quantity}

Please send me the details for shipping and payment.
`);
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
      {/* Connect to WhatsApp button 9360922878*/}
      <Button
        fullWidth
        variant="contained"
        color="primary"
        href={`https://wa.me/9028765715?text=${message}`}
        startIcon={<WhatsAppIcon />}
      >
        Connect to WhatsApp{" "}
      </Button>
    </Grid>
  );
};
