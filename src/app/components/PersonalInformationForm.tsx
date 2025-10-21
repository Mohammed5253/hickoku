import React, { forwardRef, useImperativeHandle } from "react";
import { TextField, Grid, Typography, Box } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useUser } from "../context/UserContext";

interface PersonalInfoFormValues {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
}

// Define the methods the parent can call
export interface PersonalInformationFormHandle {
  validate: () => Promise<boolean>;
  getValues: () => PersonalInfoFormValues;
}

// Replace this with your actual user context
const PersonalInformationForm = forwardRef<PersonalInformationFormHandle>(
  (_, ref) => {
    const userContext = useUser();
    const emailFromContext = userContext?.user?.email || "";
    console.log("User context in PersonalInformationForm:", userContext?.user);
    const formik = useFormik<PersonalInfoFormValues>({
      initialValues: {
        email: emailFromContext,
        firstName: "",
        lastName: "",
        phone: "",
      },
      validationSchema: Yup.object().shape({
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required("Last name is required"),
        phone: Yup.string().required("Phone is required"),
      }),
      onSubmit: () => {
        // handled in parent
      },
    });

    // Expose methods to parent
    useImperativeHandle(ref, () => ({
      validate: async () => {
        const errors = await formik.validateForm();
        console.log(formik);
        formik.setTouched(
          Object.keys(formik.initialValues).reduce((acc, key) => {
            acc[key as keyof PersonalInfoFormValues] = true;
            return acc;
          }, {} as Record<keyof PersonalInfoFormValues, boolean>)
        );
        return Object.keys(errors).length === 0;
      },
      getValues: () => formik.values,
    }));

    return (
      <Box component="form" noValidate sx={{ p: 1 }}>
        <Typography variant="h6" gutterBottom>
          Personal Information
        </Typography>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              disabled={!!emailFromContext}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && !!formik.errors.email}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              id="phone"
              name="phone"
              label="Phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && !!formik.errors.phone}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              id="firstName"
              name="firstName"
              label="First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.firstName && !!formik.errors.firstName}
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              id="lastName"
              name="lastName"
              label="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastName && !!formik.errors.lastName}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>
        </Grid>
      </Box>
    );
  }
);
PersonalInformationForm.displayName = "PersonalInformationForm"; // ✅ Add this line

export default PersonalInformationForm;
