import { useState, createContext } from "react";
import { pizzas } from "../data/pizzasDb";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const PizzasContext = createContext();
const MySwal = withReactContent(Swal);

function PizzasProvider({ children }) {
  const [arrPizzas, setArrPizzas] = useState(pizzas);
  const [pizzaSel, setPizzaSel] = useState({});
  const [pizzasCarrito, setPizzasCarrito] = useState([]);
  const totalCompras = pizzasCarrito.reduce((a, p) => a + p.price * p.count, 0);

  function add(pizza) {
    const existe = pizzasCarrito.find((p) => p.id === pizza.id);

    if (existe) {
      MySwal.fire({
        title: <strong>Llevas {existe.count + 1} pizzas {pizza.name} en tu carrito</strong>,
        html: <i>Que las disfrutes!</i>,
        icon: "success",
      }).then(() => {
        setPizzasCarrito(
          pizzasCarrito.map((p) =>
            p.id === pizza.id ? { ...existe, count: existe.count + 1 } : p
          )
        );
      });
    } else {
      MySwal.fire({
        title: <strong>Haz añadido una pizza {pizza.name} a tu carrito</strong>,
        html: <i>Que la disfrutes!</i>,
        icon: "success",
      }).then(() => {
        setPizzasCarrito([...pizzasCarrito, { ...pizza, count: 1 }]);
      });
    }
  }

  function eliminar(pizza) {

    
    const existe = pizzasCarrito.find((p) => p.id === pizza.id);

    if (existe.count === 1) {

      MySwal.fire({
        title: <strong>Eliminaste la pizza {pizza.name} de tu carrito</strong>,
        html: <i>Vuelve a pedirla!</i>,
        icon: "success",
      }).then(() => {
        setPizzasCarrito(pizzasCarrito.filter((p) => p.id !== pizza.id));
      });
     
    } else {
      setPizzasCarrito(
        pizzasCarrito.map((p) =>
          p.id === pizza.id ? { ...existe, count: existe.count - 1 } : p
        )
      );
    }
  }

  return (
    <PizzasContext.Provider
      value={{
        setArrPizzas,
        pizzaSel,
        setPizzaSel,
        arrPizzas,
        pizzasCarrito,
        setPizzasCarrito,
        add,
        eliminar,
        totalCompras
      }}
    >
      {children}
    </PizzasContext.Provider>
  );
}

export { PizzasProvider };

export default PizzasContext;
