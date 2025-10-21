"use client";

import React, { useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  Divider,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Button,
} from "@mui/material";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import PersonalInformationForm, {
  PersonalInformationFormHandle,
} from "../components/PersonalInformationForm";
import ShippingAddressForm, {
  ShippingAddressFormHandle,
} from "../components/ShippingAddressForm";
import { loadRazorpayAndPay } from "@/app/utils/razorpay"; // Create this helper

export default function CheckoutPage() {
  const personalInfoRef = useRef<PersonalInformationFormHandle>(null);
  const shippingRef = useRef<ShippingAddressFormHandle>(null);
  const { cartItems } = useCart();
  const { login } = useUser(); // 👈 use context

  const handlePlaceOrder = async () => {
    const isPersonalValid = await personalInfoRef.current?.validate();
    const isShippingValid = await shippingRef.current?.validate();

    if (!isPersonalValid || !isShippingValid) {
      console.warn("❌ Validation failed");
      return;
    }

    // ✅ Collect data
    const personal = personalInfoRef.current?.getValues();
    console.log("###", personal);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const shipping = shippingRef.current?.getValues();

    // ✅ Store in context
    if (personal) {
      login({
        id: "user-id", // replace with real ID if available
        name: `${personal.firstName} ${personal.lastName}`,
        email: personal.email,
        phone: personal.phone,
      });

      // ✅ Proceed to Razorpay payment
      await loadRazorpayAndPay({
        amount: 500, // change as needed
        name: `${personal.firstName} ${personal.lastName}`,
        email: personal.email,
        contact: personal.phone,
      });
    }
  };

  return (
    <Grid container spacing={4} sx={{ p: 3, margin: "auto" }}>
      {/* Left Section: Entire Form */}
      <Grid size={{ xs: 12, md: 7 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h5" mb={3}>
            Checkout
          </Typography>

          {/* Personal Info */}
          <Box mb={4}>
            <PersonalInformationForm ref={personalInfoRef} />
          </Box>

          {/* Shipping Section */}
          <Box mb={4}>
            <ShippingAddressForm ref={shippingRef} />
          </Box>

          {/* Place Order Button */}
          <Box display="flex" justifyContent="center" mt={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={handlePlaceOrder}
            >
              Place Order
            </Button>
          </Box>
        </Paper>
      </Grid>

      {/* Right Section: Cart Summary */}
      <Grid size={{ xs: 12, md: 5 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6" mb={2}>
            Your Cart
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <List>
            {cartItems.map((item) => (
              <ListItem key={item.id} alignItems="flex-start" sx={{ mb: 2 }}>
                <ListItemAvatar>
                  <Avatar
                    variant="rounded"
                    src={item.image}
                    alt={item.name}
                    sx={{ width: 80, height: 80, borderRadius: 2 }}
                  />
                </ListItemAvatar>

                <Box sx={{ ml: 2 }}>
                  <Typography fontWeight="bold">{item.name}</Typography>
                  <Typography color="text.primary" variant="body2">
                    Qty: {item.quantity}
                  </Typography>
                  <Typography color="text.primary" variant="body2">
                    Price: ₹{(item.price * item.quantity).toLocaleString()}
                  </Typography>
                </Box>
              </ListItem>
            ))}
          </List>
          <Divider />
          <Box mt={2} display="flex" justifyContent="space-between">
            <Typography fontWeight="bold">Total:</Typography>
            <Typography fontWeight="bold">
              ₹
              {cartItems
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toLocaleString()}
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
