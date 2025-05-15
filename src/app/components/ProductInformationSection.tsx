import React from "react";
import { Container, Typography, Box, Divider } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";
import HelpIcon from "@mui/icons-material/Help";
import ReplayIcon from "@mui/icons-material/Replay";

const ProductInformationSection = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Information
        </Typography>

        <Box sx={{ my: 2, display: "flex", alignItems: "center" }}>
          <LocalShippingIcon sx={{ mr: 1 }} />
          <Typography variant="body1">
            Delivery: Express (Free)
            <br />
            2 — 4 working days
            <br />
            Potential delays to be communicated due to customs-approved
            treatment
          </Typography>
        </Box>
        <Divider sx={{ my: 2 }} />

        <Box sx={{ my: 2, display: "flex", alignItems: "center" }}>
          <ReplayIcon sx={{ mr: 1 }} />
          <Typography variant="body1">
            Returns: All returns are free of charge.
            <br />
            For more information, see our return policy
          </Typography>
        </Box>
        <Divider sx={{ my: 2 }} />

        <Box sx={{ my: 2, display: "flex", alignItems: "center" }}>
          <PaymentIcon sx={{ mr: 1 }} />
          <Typography variant="body1">
            Secure Payment: Visa, Mastercard, American Express, Apple Pay,
            Paypal, Klarna
          </Typography>
        </Box>
        <Divider sx={{ my: 2 }} />

        <Box sx={{ my: 2, display: "flex", alignItems: "center" }}>
          <HelpIcon sx={{ mr: 1 }} />
          <Typography variant="body1">
            FAQ: Looking for information? FAQ
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductInformationSection;
