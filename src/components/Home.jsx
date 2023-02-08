import usePizza from "../hooks/usePizza";
import Banner from "./Banner";
import CardPizza from "./CardPizza";

function Home() {
  const { arrPizzas } = usePizza();

  return (
    <div>
      <Banner />
      <div className="contenedor-pizza">
        {arrPizzas.map((pizza) => (
          <div key={pizza.id}>
            <CardPizza pizza={pizza} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
