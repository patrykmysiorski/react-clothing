import {createContext} from "react";

export interface ICartContext {
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<ICartContext>({
  isCartOpen: false,
  setIsCartOpen: () => {},
});

export default CartContext;
