import {useContext} from "react";
import MenuContext, {IMenuContext} from "../contexts/MenuContext";

const useMenu = () => useContext<IMenuContext>(MenuContext);

export default useMenu;
