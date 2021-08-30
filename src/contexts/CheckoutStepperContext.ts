import React from "react";

export interface ICheckoutStepperContext {
  activeStep: number;
  setActiveStep: (value: number) => void;
  goToNextStep: () => void;
  completed: { [k: number]: boolean };
  setCompleted: (any: any) => void;
}

const CheckoutStepperContext = React.createContext<ICheckoutStepperContext>({
  activeStep: 0,
  setActiveStep: (value) => {},
  goToNextStep: () => {},
  completed: {},
  setCompleted: (any) => {},
});

export default CheckoutStepperContext;
