/* eslint-disable @typescript-eslint/no-unused-vars */
// app/checkout/guest-or-login/page.tsx
"use client";
import GuestOrSignInCheckout from "@/app/components/GuestOrSignInCheckout";

export default function CheckoutPage() {
  const handleGuest = (email: string) => {
    // Save guest email, go to shipping address form, or shipping step
  };
  const handleLogin = (credentials: { email: string; password: string }) => {
    // Authenticate user, then continue to checkout
  };

  return (
    <GuestOrSignInCheckout
      onContinueAsGuest={handleGuest}
      onLogin={handleLogin}
    />
  );
}
