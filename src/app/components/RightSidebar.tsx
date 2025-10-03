"use client";

import {
  Box,
  Typography,
  IconButton,
  Divider,
  Button,
  Grid,
  Stack,
  Drawer,
  Link,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useCart } from "@/app/context/CartContext"; // your custom hook
import { useDrawer } from "@/app/context/DrawerContext"; // your custom hook

export default function CartDrawerContent() {
  const { isDrawerOpen, closeDrawer } = useDrawer();
  const { cartItems, updateQuantity } = useCart(); // Assuming you have updateQuantity in context

  // Optional: sync a local copy if needed (for debounce or animation)
  const [cart, setCart] = useState(cartItems);

  // Sync local state when cartItems change
  useEffect(() => {
    setCart(cartItems);
  }, [cartItems]);

  const handleQuantityChange = (productId: number, change: number) => {
    const item = cart.find((item) => item.id === productId);
    if (!item) return;

    const newQty = Math.max(1, item.quantity + change);
    updateQuantity(productId, newQty); // Update via context (recommended)
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalDiscount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity * (item.discount || 0),
    0
  );
  const total = subtotal - totalDiscount;

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={isDrawerOpen}
      onClose={closeDrawer}
    >
      <Box sx={{ width: { xs: "100%", sm: 400 }, p: 3 }}>
        <Typography variant="h6" fontWeight={600} mb={2}>
          Your Cart
        </Typography>

        <Divider />

        {/* Cart Items */}
        <Box mt={2}>
          {cart.map((item) => (
            <Box key={item.id} display="flex" mb={3}>
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                style={{ objectFit: "cover", borderRadius: 8 }}
              />
              <Box ml={2} flex={1}>
                <Typography fontWeight={600}>{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  ₹{item.price.toLocaleString()}{" "}
                  {item?.discount && item?.discount > 0 && (
                    <Typography component="span" color="success.main" ml={1}>
                      -{item?.discount * 100}%
                    </Typography>
                  )}
                </Typography>

                {/* Quantity Selector */}
                <Stack direction="row" alignItems="center" mt={1}>
                  <IconButton
                    size="small"
                    onClick={() => handleQuantityChange(item.id, -1)}
                  >
                    <RemoveIcon fontSize="small" />
                  </IconButton>
                  <Typography px={2}>{item.quantity}</Typography>
                  <IconButton
                    size="small"
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    <AddIcon fontSize="small" />
                  </IconButton>
                </Stack>

                <Typography mt={1} fontWeight={500}>
                  Total: ₹
                  {(
                    item.price *
                    item.quantity *
                    (1 - (item.discount || 0))
                  ).toLocaleString()}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Summary */}
        <Box>
          <Grid container justifyContent="space-between" mb={1}>
            <Typography>Subtotal</Typography>
            <Typography>₹{subtotal.toLocaleString()}</Typography>
          </Grid>
          <Grid container justifyContent="space-between" mb={1}>
            <Typography>Discount</Typography>
            <Typography color="success.main">
              -₹{totalDiscount.toLocaleString()}
            </Typography>
          </Grid>
          <Grid container justifyContent="space-between" mb={2}>
            <Typography variant="h6" fontWeight={600}>
              Total
            </Typography>
            <Typography variant="h6" fontWeight={600}>
              ₹{total.toLocaleString()}
            </Typography>
          </Grid>

          <Button
            variant="contained"
            fullWidth
            color="primary"
            size="large"
            sx={{ mt: 2 }}
          >
            <Link href={`/checkout`}>Proceed to Checkout</Link>
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
