"use client";

import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  Link as MuiLink,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { useUser } from "../context/UserContext";

export default function GuestOrSignInCheckout({
  onContinueAsGuest,
  onLogin,
}: {
  onContinueAsGuest: (email: string) => void;
  onLogin: (credentials: { email: string; password: string }) => void;
}) {
  const [guestEmail, setGuestEmail] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const { guestUser } = useUser();

  const handleGuestContinue = (e: React.FormEvent) => {
    e.preventDefault();
    onContinueAsGuest(guestEmail);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({ email: loginEmail, password: loginPassword });
  };

  return (
    <Box sx={{ py: 6, px: { xs: 2, md: 4 } }}>
      <Typography variant="h4" fontWeight={600} mb={4} align="center">
        Checkout
      </Typography>

      <Grid container spacing={4}>
        {/* Guest checkout section */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Box
            component="form"
            onSubmit={handleGuestContinue}
            sx={{
              p: 3,
              border: 1,
              borderColor: "divider",
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" mb={2}>
              Continue as Guest
            </Typography>
            <Typography variant="body2" mb={3} color="text.secondary">
              Enter your email to continue as a guest.
            </Typography>

            <TextField
              label="Email"
              type="email"
              fullWidth
              required
              margin="normal"
              value={guestEmail}
              onChange={(e) => {
                setGuestEmail(e.target.value);
                guestUser({ email: e.target.value });
              }}
            />
            <Link href="/checkout" passHref>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ mt: 3, textTransform: "none" }}
                fullWidth
              >
                Continue
              </Button>
            </Link>
          </Box>
        </Grid>

        {/* Divider or vertical line on desktop */}
        <Grid
          size={{ xs: 12, md: 1 }}
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Divider orientation="vertical" flexItem />
        </Grid>

        {/* Login section */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            component="form"
            onSubmit={handleLogin}
            sx={{
              p: 3,
              border: 1,
              borderColor: "divider",
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" mb={2}>
              Returning Customer
            </Typography>
            <TextField
              label="Email"
              type="email"
              fullWidth
              required
              margin="normal"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              required
              margin="normal"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ mt: 3, textTransform: "none" }}
              fullWidth
            >
              Sign In
            </Button>

            <Box mt={2} textAlign="center">
              <MuiLink
                component={Link}
                href="/forgot-password"
                underline="hover"
              >
                Forgot Password?
              </MuiLink>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
