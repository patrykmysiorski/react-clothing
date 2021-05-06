import {useLocation} from "react-router-dom";

export const usePath = () => {
  const { pathname } = useLocation();
  const urlParts: string[] = pathname.split("/");
  return urlParts[urlParts.length - 1];
};
