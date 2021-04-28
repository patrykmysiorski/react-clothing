import {createContext} from "react";

export interface IMenuContext {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const MenuContext = createContext<IMenuContext>({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
});

export default MenuContext;
