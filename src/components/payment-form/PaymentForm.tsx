import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button } from "@material-ui/core";

interface OwnProps {
  onSuccessfulPayment: () => void;
}

const PaymentForm: React.FC<OwnProps> = ({ onSuccessfulPayment }) => {
  const [agreesToEverything, setAgreesToEverything] = useState(false);
  const paymentSchema = Yup.object().shape({
    name: Yup.string()
      .required("Please, enter name")
      .min(5, "Please enter your full name"),
    cardNumber: Yup.string()
      .required("Please, enter card number")
      .min(16, "Enter at least 16 figures")
      .max(17, "Too much figures"),
    expiryDate: Yup.string()
      .required("Please, enter expiry date")
      .min(4, "Enter at least 4 figures"),
    cvv: Yup.string()
      .required("Please, enter CVV")
      .min(3, "Enter 3 figures")
      .max(4, "CVV has 3 figures"),
  });

  const formik = useFormik({
    initialValues: {
      name: "Pan Teser",
      cardNumber: "9857123477774539",
      expiryDate: "05/25",
      cvv: "777",
    },
    validationSchema: paymentSchema,
    onSubmit: (values) => {
      onSuccessfulPayment();
    },
  });
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="name"
              label="Name on card"
              fullWidth
              autoComplete="cc-name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              type="number"
              id="cardNumber"
              label="Card number"
              fullWidth
              autoComplete="cc-number"
              value={formik.values.cardNumber}
              onChange={formik.handleChange}
              error={
                formik.touched.cardNumber && Boolean(formik.errors.cardNumber)
              }
              helperText={formik.touched.cardNumber && formik.errors.cardNumber}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="expiryDate"
              label="Expiry date"
              fullWidth
              autoComplete="cc-exp"
              value={formik.values.expiryDate}
              onChange={formik.handleChange}
              error={
                formik.touched.expiryDate && Boolean(formik.errors.expiryDate)
              }
              helperText={formik.touched.expiryDate && formik.errors.expiryDate}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              type="number"
              label="CVV"
              fullWidth
              autoComplete="cc-csc"
              value={formik.values.cvv}
              onChange={formik.handleChange}
              error={formik.touched.cvv && Boolean(formik.errors.cvv)}
              helperText={formik.touched.cvv && formik.errors.cvv}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  color="secondary"
                  name="saveCard"
                  value={agreesToEverything}
                  onClick={() => setAgreesToEverything(!agreesToEverything)}
                />
              }
              label="I AGREE TO EVERYTHING"
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={!agreesToEverything}
          fullWidth={true}
        >
          Buy :)
        </Button>
      </form>
    </>
  );
};
export default PaymentForm;
