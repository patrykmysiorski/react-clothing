import { RootState } from "../store";
import { Address } from "../../components/address-form/AddressForm";

export const addressSelector = (state: RootState): Address =>
  state.address.address;
