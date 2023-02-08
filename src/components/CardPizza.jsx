import ojos from "../assets/ojos.png";
import pizzaBoton from "../assets/pizza.png";
import { useNavigate } from "react-router-dom";
import usePizza from "../hooks/usePizza";

function CardPizza({ pizza }) {
  const { add } = usePizza();

  const navigate = useNavigate();

  const irPizza = (nombre) => {
    navigate(`/pizza/${nombre}`);
  };

  return (
    <div className="carta">
      <div className="card">
        <img className="card-img-top" src={pizza.img} alt={pizza.name} />
        <div className="card-body">
          <h5 className="card-title">{pizza.name} </h5>
          <hr />
          <p className="card-text">
            {" "}
            <b>ingredientes:</b>{" "}
          </p>

          {pizza.ingredients.map((ingrediente) => (
            <ul key={ingrediente}>
              <li className="ingredientes">
                {" "}
                <img className="pizza-boton" src={pizzaBoton} alt="" />{" "}
                {ingrediente}
              </li>
            </ul>
          ))}

          <hr />

          <div className="precio">
            <h3>
              <b>$ {pizza.price}</b>
            </h3>
          </div>

          <div className="botones mt-2">
            <button
              className="btn btn-info"
              onClick={() => irPizza(pizza.name)}
            >
              Ver Más <img className="imagen-boton" src={ojos} alt="" />
            </button>

            <button className="btn btn-danger" onClick={() => add(pizza)}>
              Añadir <img className="imagen-boton" src={pizzaBoton} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
