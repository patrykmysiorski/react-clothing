import { useContext } from "react";
import CartContext, { ICartContext } from "../contexts/CartContext";

const useCart = () => useContext<ICartContext>(CartContext);

export default useCart;
