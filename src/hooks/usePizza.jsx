import { useContext } from "react";
import PizzasContext from "../context/PizzasProvider";

function usePizza() {
  return useContext(PizzasContext);
}

export default usePizza;
