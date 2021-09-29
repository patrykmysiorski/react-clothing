import React, { useState } from "react";
import Header from "./components/header/Header";
import "./app.scss";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Shop from "./components/shop/Shop";
import Brand from "./components/brand/Brand";
import Contact from "./components/contact/Contact";
import Help from "./components/help/Help";
import MainPage from "./components/mainPage/MainPage";
import Sidebar from "./components/sidebar/Sidebar";
import MenuContext from "./contexts/MenuContext";
import CartContext from "./contexts/CartContext";
import CheckoutStepperContext from "./contexts/CheckoutStepperContext";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import LoginForm from "./components/login/LoginForm";
import { createTheme, MuiThemeProvider } from "@material-ui/core";
import { green, orange } from "@material-ui/core/colors";
import SignupForm from "./components/signup/SignupForm";
import { useAuth } from "./hooks/useAuth";
import CustomerOrdersPreview from "./components/customerOrdersPreview/CustomerOrdersPreview";
import OrderDetails from "components/orderDetails/OrderDetails";

const theme = createTheme({
  palette: {
    text: {
      primary: "#2f2929",
      secondary: "#555555",
    },
    primary: {
      main: orange[300],
    },
    secondary: {
      main: green[300],
    },
  },
  typography: {
    allVariants: { color: "#2f2929" },
  },
});
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = React.useState<{ [k: number]: boolean }>(
    {}
  );

  const goToNextStep = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    setActiveStep(activeStep + 1);
  }; //TODO validate length

  const hideSidebars = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    // if (isCartOpen) {
    //   setIsCartOpen(false);
    // }
  };
  const { push } = useHistory();

  return (
    <MuiThemeProvider theme={theme}>
      <div className="app">
        <MenuContext.Provider
          value={{
            isMenuOpen,
            setIsMenuOpen,
          }}
        >
          <CartContext.Provider
            value={{
              isCartOpen,
              setIsCartOpen,
            }}
          >
            <Sidebar />
            <Cart />
            <div
              onClick={hideSidebars}
              className={`main-content ${
                isMenuOpen ? "sidebar-menu-open" : ""
              } ${isCartOpen ? "cart-open" : ""}`}
            >
              <Header />
              <Switch>
                <Route path="/shop">
                  <Shop />
                </Route>
                <Route path="/brand">
                  <Brand />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/help">
                  <Help />
                </Route>
                <PrivateRoute exact path={"/orders"}>
                  <CustomerOrdersPreview />
                </PrivateRoute>
                <PrivateRoute exact path={"/order/:id"} component={OrderDetails}>
                  <></>
                </PrivateRoute>
                {/*<PrivateRoute exact path="/">*/}
                {/*  <LoginForm onSubmitSuccess={() => {}} />*/}
                {/*</PrivateRoute>*/}
                <Route path="/checkout">
                  <CheckoutStepperContext.Provider
                    value={{
                      setActiveStep,
                      activeStep,
                      goToNextStep,
                      completed,
                      setCompleted,
                    }}
                  >
                    <Checkout />
                  </CheckoutStepperContext.Provider>
                </Route>
                <Route path="/login">
                  <LoginForm
                    onSubmitSuccess={() => {
                      push("/shop");
                    }}
                  />
                </Route>
                <Route path="/signup">
                  <SignupForm />
                </Route>
                <Route path="/">
                  <MainPage />
                </Route>
              </Switch>
            </div>
          </CartContext.Provider>
        </MenuContext.Provider>
      </div>
    </MuiThemeProvider>
  );
};

// @ts-ignore
const PrivateRoute = ({ children, ...rest }) => {
  // @ts-ignore
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      render={() => (user ? children : <Redirect to={"/login"} />)}
    />
  );
};
// @ts-ignore
const PrincipalRestrictedRoute = ({ children, ...rest }) => {
  // @ts-ignore
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      render={() => (user ? children : <Redirect to={"/logout"} />)}
    />
  );
};

export default App;
