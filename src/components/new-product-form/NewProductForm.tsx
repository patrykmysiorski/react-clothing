import React, { FunctionComponent } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Button, CssBaseline } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useAppDispatch } from "../../redux/hooks";
import { asyncPostClothStart } from "../../redux/shop/shopReducer";

interface OwnProps {}

type Props = OwnProps;

const NewProductForm: FunctionComponent<Props> = (props) => {
  const dispatch = useAppDispatch();

  const schema = Yup.object().shape({
    name: Yup.string().required("Please, enter your name"),
    imageUrl: Yup.string().required("Please, enter your Image url"),
    price: Yup.string().required("Please, enter price"),
    type: Yup.string().required("Please, enter type"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      imageUrl: "",
      price: "",
      type: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(asyncPostClothStart({ ...values, sex: "uni" }));
    },
  });

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping price
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <CssBaseline />
          <Grid item xs={6} sm={6}>
            <TextField
              required
              id="name"
              name="name"
              label="Name"
              fullWidth
              autoComplete="given-name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="imageUrl"
              name="imageUrl"
              label="Image url"
              fullWidth
              autoComplete="family-name"
              value={formik.values.imageUrl}
              onChange={formik.handleChange}
              error={formik.touched.imageUrl && Boolean(formik.errors.imageUrl)}
              helperText={formik.touched.imageUrl && formik.errors.imageUrl}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="price"
              name="price"
              label="Price"
              autoComplete="shipping price-line1"
              value={formik.values.price}
              onChange={formik.handleChange}
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price && formik.errors.price}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="type"
              name="type"
              label="Type"
              autoComplete="type price-line1"
              value={formik.values.type}
              onChange={formik.handleChange}
              error={formik.touched.type && Boolean(formik.errors.type)}
              helperText={formik.touched.type && formik.errors.type}
            />
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" type="submit">
          Add
        </Button>
      </form>
    </>
  );
};

export default NewProductForm;
