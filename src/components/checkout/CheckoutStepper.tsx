import React, { FunctionComponent } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useCheckoutStepper from "../../hooks/useCheckoutStepper";
import CheckoutSecondStep from "./steps/CheckoutSecondStep";
import CheckoutFirstStep from "./steps/CheckoutFirstStep";
import CheckoutThirdStep from "./steps/CheckoutThirdStep";
import { Container } from "@material-ui/core";
import { useAuth } from "../../hooks/useAuth";
import { addressSelector } from "../../redux/address/addressSelectors";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "../../redux/cart/cartSelectors";
import { useHistory } from "react-router-dom";
import { asyncPostOrderStart } from "../../redux/orders/ordersReducer";

interface OwnProps {}

type Props = OwnProps;

const CheckoutStepper: FunctionComponent<Props> = (props) => {
  const { goToNextStep, setActiveStep } = useCheckoutStepper();
  let dispatch = useDispatch();
  const { push } = useHistory();
  // @ts-ignore
  const { user } = useAuth();
  let address = useSelector(addressSelector);
  let products = useSelector(cartSelector);
  const getStepContent = (step: number) => {
    if (products?.length === 0) {
      push("/shop");
    }
    switch (step) {
      case 0:
        if (user) {
          goToNextStep();
        }
        return <CheckoutFirstStep onFinish={goToNextStep} />;
      case 1:
        if (!user) {
          setActiveStep(0);
        }
        return <CheckoutSecondStep onFinish={goToNextStep} />;
      case 2:
        if (!user) {
          setActiveStep(0);
        }
        return (
          <CheckoutThirdStep
            onFinish={() => {
              dispatch(
                asyncPostOrderStart({ uid: user.uid, address, products })
              );
              alert("I should go to summary :0");
            }}
          />
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <HorizontalNonLinearStepper
      steps={["Login/signup", "Shipping", "$ Payment $"]}
      getStepContent={getStepContent}
    />
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    button: {
      marginRight: theme.spacing(1),
      justifyContent: "flex-end",
    },
    completed: {
      display: "inline-block",
    },
    instructions: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(1),
    },
  })
);

interface StepperProps {
  steps: string[];
  getStepContent: (arg0: number) => any;
}

const HorizontalNonLinearStepper: React.FC<StepperProps> = ({
  steps,
  getStepContent,
}) => {
  const classes = useStyles();
  const {
    activeStep,
    setActiveStep,
    completed,
    setCompleted,
  } = useCheckoutStepper();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <div className={classes.root}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton
              onClick={handleStep(index)}
              completed={completed[index]}
            >
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              <Container>{getStepContent(activeStep)}</Container>
            </Typography>
            {/*            <Box display="flex" justifyContent="center">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                Next
              </Button>
            </Box>*/}
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutStepper;
