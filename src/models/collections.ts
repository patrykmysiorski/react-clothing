import {Product} from "./product";

export interface Collections {
  [key: string]: any;
  hats?: Product[];
  jackets?: Product[];
  mens?: Product[];
  sneakers?: Product[];
  womens?: Product[];
}
