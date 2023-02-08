import { NavLink } from "react-router-dom";
import pizzaLogo from "../assets/pizza.png";
import carrito from "../assets/carrito-de-compras.png";
import usePizza from "../hooks/usePizza";

function NavBar() {
  const { totalCompras } = usePizza();
  
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-active");
  return (
    <div className="nav">
      <NavLink end to="/" className={setActiveClass}>
        <div className="titulo">
          <img className="imagen-nav" src={pizzaLogo} alt="" />
          <h5>Pizzas Mamma Mia !</h5>
        </div>
      </NavLink>

      <NavLink end to="/carrito" className={setActiveClass}>
        <div className="carrito">
          <img className="imagen-nav" src={carrito} alt="" />
          <h5>${totalCompras}</h5>
        </div>
      </NavLink>
    </div>
  );
}

export default NavBar;
