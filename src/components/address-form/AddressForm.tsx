import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import {
  Button,
  CssBaseline,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";

interface OwnProps {
  onSubmit: () => void;
}

const AddressForm: React.FC<OwnProps> = ({ onSubmit }) => {
  const regions = [
    "Dolnośląskie",
    "Kujawsko-Pomorskie",
    "Lubelskie",
    "Lubuskie",
    "Łódzkie",
    "Małopolskie",
    "Mazowieckie",
    "Opolskie",
    "Podkarpackie",
    "Podlaskie",
    "Pomorskie",
    "Śląskie",
    "Świętokrzyskie",
    "Warmińsko-Mazurskie",
    "Wielkopolskie",
    "Zachodniopomorskie",
  ];

  const deliverySchema = Yup.object().shape({
    delivery: Yup.string().required("Please, select delivery option"),
  });

  const AddressSchema = Yup.object().shape({
    firstName: Yup.string().required("Please, enter your name"),
    lastName: Yup.string().required("Please, enter your last name"),
    address: Yup.string().required("Please, enter address"),
    city: Yup.string().required("Please, enter city"),
    region: Yup.string().required("Please, select region"),
    zip: Yup.string()
      .required("Please, enter address")
      .min(5, "Zip code should be of minimum 5 characters length"),
    country: Yup.string().required("Please, enter  country"),
    delivery: Yup.string().required("Please, select delivery option"),
  });

  const formik = useFormik({
    initialValues: {
      delivery: "",
      firstName: "",
      lastName: "",
      address: "",
      address2: "",
      city: "",
      region: "",
      zip: "",
      country: "",
    },
    validationSchema: AddressSchema,
    onSubmit: (values) => {
      onSubmit();
    },
  });

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <CssBaseline />
          <Grid item xs={6} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address"
              name="address"
              label="Address line 1"
              fullWidth
              autoComplete="shipping address-line1"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="Address line 2"
              fullWidth
              autoComplete="shipping address-line2"
              value={formik.values.address2}
              onChange={formik.handleChange}
              error={formik.touched.address2 && Boolean(formik.errors.address2)}
              helperText={formik.touched.address2 && formik.errors.address2}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Select
              id="region"
              name="region"
              labelId="State/Province/Region"
              fullWidth
              value={formik.values.region}
              onChange={formik.handleChange}
              error={formik.touched.region && Boolean(formik.errors.region)}
            >
              {regions.map((region) => (
                <MenuItem value={region}>{region}</MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
              value={formik.values.zip}
              onChange={formik.handleChange}
              error={formik.touched.zip && Boolean(formik.errors.zip)}
              helperText={formik.touched.zip && formik.errors.zip}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="shipping country"
              value={formik.values.country}
              onChange={formik.handleChange}
              error={formik.touched.country && Boolean(formik.errors.country)}
              helperText={formik.touched.country && formik.errors.country}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveAddress" value="yes" />
              }
              label="Use this address for payment details"
            />
          </Grid>
        </Grid>
        <FormLabel component="legend">Delivery type</FormLabel>
        <RadioGroup
          aria-label="delivery"
          name="delivery"
          value={formik.values.delivery}
          onChange={formik.handleChange}
        >
          <FormControlLabel control={<Radio />} label={"UPS"} value="UPS" />
          <FormControlLabel control={<Radio />} label={"DHL"} value="DHL" />
          <FormControlLabel
            control={<Radio />}
            label={"InPost"}
            value="InPost"
          />
        </RadioGroup>

        <Button variant="contained" color="primary" type="submit">
          CHECK
        </Button>
      </form>
    </>
  );
};
export default AddressForm;
