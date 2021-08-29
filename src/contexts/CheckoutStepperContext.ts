import React from "react";

export interface ICheckoutStepperContext {
  activeStep: number;
  setActiveStep: (value: number) => void;
  goToNextStep: () => void;
}

const CheckoutStepperContext = React.createContext<ICheckoutStepperContext>({
  activeStep: 0,
  setActiveStep: (value) => {},
  goToNextStep: () => {},
});

export default CheckoutStepperContext;
