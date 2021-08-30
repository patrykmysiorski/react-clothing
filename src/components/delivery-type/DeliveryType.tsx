import React, { FunctionComponent } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";

interface OwnProps {}

type Props = OwnProps;

const DeliveryType: FunctionComponent<Props> = (props) => {
  const deliverySchema = Yup.object().shape({
    delivery: Yup.string().required("Please, select delivery option"),
  });

  const formik = useFormik({
    initialValues: {
      delivery: "",
    },
    validationSchema: deliverySchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form style={{ float: "right" }} onSubmit={formik.handleSubmit}>
      <FormControl component="fieldset">
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
      </FormControl>
      <button type="submit">test</button>
    </form>
  );
};

export default DeliveryType;
