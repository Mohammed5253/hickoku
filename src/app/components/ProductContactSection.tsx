import React from "react";
import { Container, Typography, Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const ProductContactSection = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Us
        </Typography>

        <Box sx={{ my: 2, display: "flex", alignItems: "center" }}>
          <EmailIcon sx={{ mr: 1 }} />
          <Typography variant="body1">
            Send us an email: Our customer care team will get back to you as
            soon as possible.
          </Typography>
        </Box>

        <Box sx={{ my: 2, display: "flex", alignItems: "center" }}>
          <PhoneIcon sx={{ mr: 1 }} />
          <Typography variant="body1">
            You can also call us on the following number: +852 34 27 85 47
            <br />
            Monday to Friday from 9am to 6pm, except public holidays.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductContactSection;
