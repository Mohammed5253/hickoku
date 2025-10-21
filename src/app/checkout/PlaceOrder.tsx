// components/CheckoutButton.tsx
"use client";

import { Box, Button } from "@mui/material";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function PlaceOrder() {
  const [isRazorpayReady, setIsRazorpayReady] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setIsRazorpayReady(true);
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    const res = await fetch("/api/razorpay/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 500 }), // Rs. 500
    });

    const order = await res.json();

    if (!order?.id) {
      alert("Order creation failed");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // From .env
      amount: order.amount,
      currency: order.currency,
      name: "Your Store",
      description: "Test Transaction",
      order_id: order.id,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      handler: function (response: any) {
        alert(
          `Payment successful! Payment ID: ${response.razorpay_payment_id}`
        );
        // ✅ Save order in DB or redirect
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />

      <Box display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          onClick={handlePayment}
          disabled={!isRazorpayReady}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Place Order
        </Button>
      </Box>
    </>
  );
}
