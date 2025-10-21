
// /app/api/razorpay/order/route.ts (for Next.js 13+/App Router)
import Razorpay from "razorpay";
import { NextRequest, NextResponse } from "next/server";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID as string,
  key_secret: process.env.RAZORPAY_KEY_SECRET as string,
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { amount, currency = "INR", receipt = "receipt#1" } = body;

  const options = {
    amount: amount * 100, // Razorpay accepts amount in paisa
    currency,
    receipt,
    payment_capture: 1,
  };

  try {
    const order = await razorpay.orders.create(options);
    return NextResponse.json(order);
  } catch (error) {
    return NextResponse.json({ error: "Order creation failed" }, { status: 500 });
  }
}
