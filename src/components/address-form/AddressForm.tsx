import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MenuItem from "@material-ui/core/MenuItem";
import {
  Button,
  CssBaseline,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../redux/hooks";
import { setAddress } from "../../redux/address/addressReducer";
import { REGIONS } from "components/address-form/consts/regions";
import { COUNTRIES } from "components/address-form/consts/countries";
import { useSelector } from "react-redux";
import { orderSelector } from "redux/orders/ordersSelectors";
import { useAuth } from "hooks/useAuth";
import AddressLoader from "components/address-form/address-loader/AddressLoader";
import { addressSelector } from "redux/address/addressSelectors";

interface OwnProps {
  onSubmit: () => void;
  initFormState: Address;
}

export interface Address {
  firstName: string;
  lastName: string;
  address: string;
  address2?: string;
  city: string;
  region: string;
  zip: string;
  country: string;
  delivery: string;
}

const AddressForm: React.FC<OwnProps> = ({ onSubmit, initFormState }) => {
  const address = useSelector(addressSelector);
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
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: address,
    validationSchema: AddressSchema,
    onSubmit: (values) => {
      dispatch(setAddress(values));
      onSubmit();
    },
  });
  const { orders } = useSelector(orderSelector);
  const [addresses, setAdresses] = useState<Address[]>([]);
  useEffect(() => {
    setAdresses(orders.map((order) => order.address));
  }, [orders]);

  // @ts-ignore
  const { user } = useAuth();

  const [hasChosenAddress, setHasChosenAddress] = useState(true);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      {user && addresses.length > 0 && (
        <AddressLoader
          addresses={addresses}
          onChosen={() => {
            setHasChosenAddress(true);
            onSubmit();
          }}
          onNotChosen={() => {
            setHasChosenAddress(false);
          }}
        />
      )}
      {!hasChosenAddress && addresses.length > 0 && (
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
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
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
                error={
                  formik.touched.address2 && Boolean(formik.errors.address2)
                }
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
              <TextField
                fullWidth
                required
                id="region"
                name="region"
                label="Region"
                select
                value={formik.values.region}
                onChange={formik.handleChange}
                error={formik.touched.region && Boolean(formik.errors.region)}
                helperText={formik.touched.region && formik.errors.region}
              >
                {REGIONS.map((country) => (
                  <MenuItem value={country}>{country}</MenuItem>
                ))}
              </TextField>
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
                fullWidth
                required
                id="country"
                name="country"
                label="Country"
                select
                value={formik.values.country}
                onChange={formik.handleChange}
                error={formik.touched.country && Boolean(formik.errors.country)}
                helperText={formik.touched.country && formik.errors.country}
              >
                {COUNTRIES.map((country) => (
                  <MenuItem value={country}>{country}</MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <div className={"m-top-3"}>
            <FormLabel component="legend">Delivery type</FormLabel>
            <RadioGroup
              aria-label="delivery"
              name="delivery"
              value={formik.values.delivery}
              onChange={formik.handleChange}
            >
              <FormControlLabel
                control={<Radio />}
                label={"7$ - UPS "}
                value="UPS"
              />
              <FormControlLabel
                control={<Radio />}
                label={"8$ - DHL"}
                value="DHL"
              />
              <FormControlLabel
                control={<Radio />}
                label={"6$ - InPost"}
                value="InPost"
              />
            </RadioGroup>
          </div>
          <div className={"m-top-3"}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth={true}
            >
              Submit
            </Button>
          </div>
        </form>
      )}
    </>
  );
};
export default AddressForm;
