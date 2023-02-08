import { useEffect, useState } from "react";
import usePizza from "../hooks/usePizza";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import pizzaBoton from "../assets/pizza.png";

function Pizza() {
  const navigate = useNavigate();
  const { nombre } = useParams();
  const { arrPizzas, setPizzaSel, pizzaSel, add } = usePizza();
  const MySwal = withReactContent(Swal);
  const [ingredientes, setIngredientes] = useState([]);

  function swal() {
    MySwal.fire({
      title: <strong>No encontramos ninguna pizza con ese nombre!</strong>,
      html: <i>Serás dirigido a Home !</i>,
      icon: "error",
    }).then(() => {
      navigate("/");
    });
  }

  useEffect(() => {
    function pizza() {
      const pizzaSeleccionada = arrPizzas.find((pizza) => {
        return pizza.name === nombre;
      });

      if (
        pizzaSeleccionada === undefined ||
        pizzaSeleccionada === "" ||
        pizzaSeleccionada === null
      ) {
        swal();
      } else {
        setPizzaSel(pizzaSeleccionada);
        setIngredientes(pizzaSeleccionada.ingredients);
      }
    }

    pizza();
  });

  return (
    <>
      {pizzaSel !== {} ? (
        <div className="pizza-unique-contenedor mt-5">
          <div className="row row-pizza">
            <div className="col-5">
              <img className="foto-pizza" src={pizzaSel.img} alt="" />
            </div>
            <div className="col-7 descripcion">
              <h5 className="mt-4" autoCapitalize="capitalize">
                {pizzaSel.name}
              </h5>
              <hr />
              <p>{pizzaSel.desc}</p>

              <p className="card-text">
                {" "}
                <b>ingredientes:</b>{" "}
              </p>

              {ingredientes.map((ingrediente) => (
                <ul key={ingrediente}>
                  <li className="ingredientes">
                    {" "}
                    <img className="pizza-boton" src={pizzaBoton} alt="" />{" "}
                    {ingrediente}
                  </li>
                </ul>
              ))}

              <div className="precio-pizza-unique mt-3 mb-4">
                <h4>
                  <b>Precio : $ {pizzaSel.price}</b>
                </h4>

                <button
                  className="btn btn-danger"
                  onClick={() => add(pizzaSel)}
                >
                  Añadir{" "}
                  <img className="imagen-boton" src={pizzaBoton} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Pizza;
