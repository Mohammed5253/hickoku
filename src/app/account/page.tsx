// app/login/page.tsx
"use client";

import {
  Box,
  Button,
  Link as MuiLink,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add login logic
    console.log("Email:", email, "Password:", password);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          backgroundColor: "#fff",
          p: 4,
          borderRadius: 2,
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="h5" align="center" fontWeight={600} gutterBottom>
          Login to your account
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              py: 1.5,
              backgroundColor: "#222",
              "&:hover": { backgroundColor: "#000" },
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Login
          </Button>
        </Box>

        <Box
          mt={2}
          display="flex"
          justifyContent="space-between"
          fontSize="14px"
        >
          <MuiLink component={Link} href="/forgot-password" underline="hover">
            Forgot Password?
          </MuiLink>
          <MuiLink component={Link} href="/register" underline="hover">
            Create Account
          </MuiLink>
        </Box>
      </Container>
    </Box>
  );
}
