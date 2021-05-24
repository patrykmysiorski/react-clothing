// const useCart = () => ({
//   isCartOpen: true,
//   setIsCartOpen: (isCartOpen: boolean) => {},
// });

import CartContext, {ICartContext} from "contexts/CartContext";
import {useContext} from "react";

const useCart = () => useContext<ICartContext>(CartContext);

export default useCart;
