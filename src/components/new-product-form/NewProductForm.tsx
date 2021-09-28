import React, { FunctionComponent } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Typography from "@material-ui/core/Typography";
import { Button, CssBaseline, MenuItem } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useAppDispatch } from "../../redux/hooks";
import { asyncPostClothStart } from "../../redux/shop/shopReducer";
import { Gender } from "../../constants/gender";
import { ClothType } from "../../constants/clothType";
import styles from "./newProductForm.module.scss";
import { useAuth } from "hooks/useAuth";

interface OwnProps {
  onAdd: () => void;
  setOpened: (opened: boolean) => void;
}

type Props = OwnProps;

const NewProductForm: FunctionComponent<Props> = (props) => {
  const dispatch = useAppDispatch();
  // @ts-ignore
  const { user } = useAuth();

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
          author: user.uid,
        })
      );
      props.onAdd();
    },
  });

  return (
    <div className={styles.container}>
      <Typography variant="h6" gutterBottom>
        Add new amazing product!
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <CssBaseline />
        <div className={styles.fields}>
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

          <TextField
            required
            id="imageUrl"
            name="imageUrl"
            label="Image url (PLEASE PROVIDE A LEGIT URL TO A PICTURE)"
            value={formik.values.imageUrl}
            onChange={formik.handleChange}
            error={formik.touched.imageUrl && Boolean(formik.errors.imageUrl)}
            helperText={formik.touched.imageUrl && formik.errors.imageUrl}
          />

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

          <TextField
            required
            id="currency"
            name="currency"
            label="Currency"
            select
            value={formik.values.currency}
            onChange={formik.handleChange}
            error={formik.touched.currency && Boolean(formik.errors.currency)}
            helperText={formik.touched.currency && formik.errors.currency}
          >
            <MenuItem value={"$"}>$</MenuItem>
            <MenuItem value={"PLN"}>PLN</MenuItem>
            <MenuItem value={"EURO"}>EURO</MenuItem>
          </TextField>

          <TextField
            required
            id="type"
            name="type"
            label="Type"
            select
            value={formik.values.type}
            onChange={formik.handleChange}
            error={formik.touched.type && Boolean(formik.errors.type)}
            helperText={formik.touched.type && formik.errors.type}
          >
            <MenuItem value={ClothType.HAT}>{ClothType.HAT}</MenuItem>
            <MenuItem value={ClothType.JACKET}>{ClothType.JACKET}</MenuItem>
            <MenuItem value={ClothType.TROUSERS}>{ClothType.TROUSERS}</MenuItem>
            <MenuItem value={ClothType.BOOTS}>{ClothType.BOOTS}</MenuItem>
          </TextField>

          <TextField
            required
            id="gender"
            name="gender"
            label="Gender"
            select
            value={formik.values.gender}
            onChange={formik.handleChange}
            error={formik.touched.gender && Boolean(formik.errors.gender)}
            helperText={formik.touched.gender && formik.errors.gender}
          >
            <MenuItem value={Gender.MALE}>{Gender.MALE}</MenuItem>
            <MenuItem value={Gender.FEMALE}>{Gender.FEMALE}</MenuItem>
            <MenuItem value={Gender.UNI}>{Gender.UNI}</MenuItem>
          </TextField>
          <Button variant="contained" color="primary" type="submit">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewProductForm;
