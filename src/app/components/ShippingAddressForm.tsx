import React, { forwardRef, useImperativeHandle } from "react";
import { TextField, Grid, Typography, Box } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

// Form values interface
interface ShippingFormValues {
  address1: string;
  address2: string;
  city: string;
  state: string;
  pincode: string;
}

// Exposed methods for parent
export interface ShippingAddressFormHandle {
  validate: () => Promise<boolean>;
  getValues: () => ShippingFormValues;
}

const ShippingAddressForm = forwardRef<ShippingAddressFormHandle>((_, ref) => {
  const formik = useFormik<ShippingFormValues>({
    initialValues: {
      address1: "",
      address2: "",
      city: "",
      state: "",
      pincode: "",
    },
    validationSchema: Yup.object().shape({
      address1: Yup.string().required("Address Line 1 is required"),
      address2: Yup.string(), // Optional
      city: Yup.string().required("City is required"),
      state: Yup.string().required("State is required"),
      pincode: Yup.string().required("Pincode is required"),
    }),
    onSubmit: () => {
      // Handled by parent
    },
  });

  useImperativeHandle(ref, () => ({
    validate: async () => {
      const errors = await formik.validateForm();
      formik.setTouched(
        Object.keys(formik.initialValues).reduce((acc, key) => {
          acc[key as keyof ShippingFormValues] = true;
          return acc;
        }, {} as Record<keyof ShippingFormValues, boolean>)
      );
      return Object.keys(errors).length === 0;
    },
    getValues: () => formik.values,
  }));

  return (
    <Box component="form" noValidate sx={{ p: 1 }}>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            id="address1"
            name="address1"
            label="Address Line 1"
            value={formik.values.address1}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.address1 && !!formik.errors.address1}
            helperText={formik.touched.address1 && formik.errors.address1}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            id="address2"
            name="address2"
            label="Address Line 2 (Optional)"
            value={formik.values.address2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.address2 && !!formik.errors.address2}
            helperText={formik.touched.address2 && formik.errors.address2}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 4 }}>
          <TextField
            fullWidth
            id="city"
            name="city"
            label="City"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.city && !!formik.errors.city}
            helperText={formik.touched.city && formik.errors.city}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 4 }}>
          <TextField
            fullWidth
            id="state"
            name="state"
            label="State"
            value={formik.values.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.state && !!formik.errors.state}
            helperText={formik.touched.state && formik.errors.state}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 4 }}>
          <TextField
            fullWidth
            id="pincode"
            name="pincode"
            label="Pincode"
            value={formik.values.pincode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.pincode && !!formik.errors.pincode}
            helperText={formik.touched.pincode && formik.errors.pincode}
          />
        </Grid>
      </Grid>
    </Box>
  );
});

ShippingAddressForm.displayName = "ShippingAddressForm";

export default ShippingAddressForm;
