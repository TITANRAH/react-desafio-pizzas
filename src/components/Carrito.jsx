import usePizza from "../hooks/usePizza";
import pizzaBoton from "../assets/pizza.png";
import { useNavigate } from "react-router-dom";

function Carrito() {
  const { pizzasCarrito, add, eliminar, totalCompras, setPizzasCarrito } =
    usePizza();

  const navigate = useNavigate();
  function irAhome() {
    navigate(`/`);
  }

  return (
    <>
      <div className="detalle-contenedor mt-5">
        <div className="detalle">
          <ul>
            {pizzasCarrito.length === 0 ? (
              <div className="carrito-vacío">
                <h4>El carrito esta vacío pincha la pizza para ir a Home</h4>
                <img onClick={() => irAhome()} src={pizzaBoton} alt="pizza" />
              </div>
            ) : (
              pizzasCarrito.map((pizza, index) => (
                <li key={index}>
                  <div className="detalle-compra">
                    <div className="detalle-imagen-nombre">
                      <img
                        className="imagen-detalle"
                        src={pizza.img}
                        alt="foto"
                      />
                      <h3>{pizza.name}</h3>
                    </div>

                    <div className="detalle-botones">
                      <h3>{pizza.price * pizza.count}</h3>

                      <button
                        onClick={() => add(pizza)}
                        className="btn btn-success"
                      >
                        +
                      </button>

                      <h3>{pizza.count}</h3>

                      <button
                        onClick={() => eliminar(pizza)}
                        className="btn btn-success"
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <hr />
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="eliminar-lista-total-pagar">
          {pizzasCarrito.length > 0 ? (
            <div className="total-pagar mt-3">
              <h2>Total: ${totalCompras}</h2>
              <button className="btn btn-success">ir a Pagar</button>
            </div>
          ) : (
            <div></div>
          )}
          {pizzasCarrito.length >= 1 ? (
            <div className="eliminar-compras mt-5">
              <button
                onClick={() => setPizzasCarrito([])}
                className="btn btn-danger"
              >
                Eliminar Compras
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}

export default Carrito;
