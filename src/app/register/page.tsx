/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material";

interface SplitFormProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
  onSubmit: (data: { name?: string; email: string; password: string }) => void;
}

const SplitForm = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    console.log(data.get("name"));
    // onSubmit({
    //   name: data.get("name") as string,
    //   email: data.get("email") as string,
    //   password: data.get("password") as string,
    // });
  };

  return (
    <Grid container sx={{ minHeight: "100vh", background: "black" }}>
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 400 }}>
          <Typography variant="h4" gutterBottom>
            {"Please Register Your Account"}
          </Typography>

          <Typography variant="body1" color="text.secondary" gutterBottom>
            {"Hassle free registration to get started with our services."}
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 2 }}
          >
            {/* If name field needed (e.g. for signup) */}
            <TextField
              fullWidth
              name="name"
              label="Name"
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              name="email"
              label="Email"
              type="email"
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              name="password"
              label="Password"
              type="password"
              margin="normal"
              variant="outlined"
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 3, py: 1.5 }}
            >
              Create Account
            </Button>
            <Button variant="outlined" fullWidth sx={{ mt: 2, py: 1.5 }}>
              Sign up with Google
            </Button>
            <Button variant="outlined" fullWidth sx={{ mt: 1, py: 1.5 }}>
              Sign in with Twitter
            </Button>
            <Box sx={{ mt: 2, textAlign: "center" }}>
              <Typography variant="body2">
                Already have an account? <Link href="/login">Log in</Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>

      {isMdUp && (
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            backgroundImage: `url(https://i.pinimg.com/1200x/42/33/98/4233988613b2466766c391bcba07e3e1.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            // optionally some overlay or masking
            borderTopRightRadius: theme.shape.borderRadius * 2,
            borderBottomRightRadius: theme.shape.borderRadius * 2,
          }}
        />
      )}
    </Grid>
  );
};

export default SplitForm;
