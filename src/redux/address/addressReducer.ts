import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Address } from "../../components/address-form/AddressForm";

interface AddressState {
  address: Address;
}

const initialState: AddressState = {
  address: {
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
};

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<Address>) => {
      console.log(action.payload);
      state.address = action.payload;
    },
  },
});

export const { setAddress } = addressSlice.actions;

export const selectAddress = (state: RootState) => state.address;

export default addressSlice.reducer;
