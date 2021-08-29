import { useContext } from "react";
import CheckoutStepperContext, {
  ICheckoutStepperContext,
} from "../contexts/CheckoutStepperContext";

const useCheckoutStepper = () =>
  useContext<ICheckoutStepperContext>(CheckoutStepperContext);
 
export default useCheckoutStepper;
