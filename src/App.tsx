import React, { useState } from "react";
import Header from "./components/header/Header";
import "./app.scss";
import { Route, Switch } from "react-router-dom";
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
  const goToNextStep = () => setActiveStep(activeStep + 1); //TODO validate length
  const hideSidebars = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    // if (isCartOpen) {
    //   setIsCartOpen(false);
    // }
  };

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
                <Route path="/checkout">
                  <CheckoutStepperContext.Provider
                    value={{
                      setActiveStep,
                      activeStep,
                      goToNextStep,
                    }}
                  >
                    <Checkout />
                  </CheckoutStepperContext.Provider>
                </Route>
                <Route path="/login">
                  <LoginForm />
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

export default App;
