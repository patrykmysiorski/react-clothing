import React, { FunctionComponent } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {
  Button,
  CssBaseline,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useAppDispatch } from "../../redux/hooks";
import { asyncPostClothStart } from "../../redux/shop/shopReducer";
import { Gender } from "../../constants/gender";
import { ClothType } from "../../constants/clothType";

interface OwnProps {}

type Props = OwnProps;

const NewProductForm: FunctionComponent<Props> = (props) => {
  const dispatch = useAppDispatch();

  const schema = Yup.object().shape({
    name: Yup.string().required("Please, enter your name"),
    imageUrl: Yup.string().required("Please, enter your Image url"),
    price: Yup.string().required("Please, enter price"),
    currency: Yup.string().required("Please, enter currency"),
    gender: Yup.string().required("Please, enter gender"),
    type: Yup.string().required("Please, enter type"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      imageUrl: "",
      price: "100",
      currency: "$",
      gender: Gender.UNI,
      type: ClothType.HAT,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(
        asyncPostClothStart({
          ...values,
          date: new Date().toISOString(),
          author: "Admin",
        })
      );
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
          <Grid item>
            <TextField
              required
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="imageUrl"
              name="imageUrl"
              label="Image url"
              value={formik.values.imageUrl}
              onChange={formik.handleChange}
              error={formik.touched.imageUrl && Boolean(formik.errors.imageUrl)}
              helperText={formik.touched.imageUrl && formik.errors.imageUrl}
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="price"
              name="price"
              label="Price"
              value={formik.values.price}
              onChange={formik.handleChange}
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price && formik.errors.price}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="currency"
              name="currency"
              label="Currency"
              value={formik.values.currency}
              onChange={formik.handleChange}
              error={formik.touched.currency && Boolean(formik.errors.currency)}
              helperText={formik.touched.currency && formik.errors.currency}
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel id="demo-simple-select-label">Cloth type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formik.values.type}
              onChange={formik.handleChange}
            >
              <MenuItem value={10}>{ClothType.HAT}</MenuItem>
              <MenuItem value={20}>{ClothType.JACKET}</MenuItem>
              <MenuItem value={30}>{ClothType.TROUSERS}</MenuItem>
              <MenuItem value={40}>{ClothType.BOOTS}</MenuItem>
            </Select>
            {formik.values.type}
          </Grid>
          <Grid item>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formik.values.gender}
              onChange={formik.handleChange}
            >
              <MenuItem value={10}>{Gender.MALE}</MenuItem>
              <MenuItem value={20}>{Gender.FEMALE}</MenuItem>
              <MenuItem value={30}>{Gender.UNI}</MenuItem>
            </Select>
            {formik.values.gender}
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
