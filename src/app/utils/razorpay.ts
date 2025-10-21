// app/razorpay.ts or utils/razorpay.ts

import { loadRazorpayScript } from "./loadRazorPayment"; // path as per your structure

interface RazorpayParams {
  amount: number;
  name: string;
  email: string;
  contact: string;
}

export const loadRazorpayAndPay = async ({
  amount,
  name,
  email,
  contact,
}: RazorpayParams) => {
  const isScriptLoaded = await loadRazorpayScript();

  if (!isScriptLoaded || typeof window === "undefined" || !(window as any).Razorpay) {
    alert("Failed to load Razorpay. Please try again later.");
    return;
  }

  const res = await fetch("/api/razorpay/order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount }),
  });

  const order = await res.json();

  if (!order?.id) {
    alert("Order creation failed");
    return;
  }

  const options = {
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    amount: order.amount,
    currency: order.currency,
    name: "Your Store",
    description: "Test Transaction",
    order_id: order.id,
    handler: function (response: any) {
      alert(
        `✅ Payment success!\nPayment ID: ${response.razorpay_payment_id}`
      );
      // Save order / redirect / call API
    },
    prefill: {
      name,
      email,
      contact,
    },
    notes: {
      address: "Corporate Office",
    },
    theme: {
      color: "#3399cc",
    },
  };

  const rzp = new (window as any).Razorpay(options);
  rzp.open();
};
