
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import Pizza from "./components/Pizza.jsx";
import Carrito from "./components/Carrito.jsx";
import NotFound from "./components/NotFound.jsx";





function App() {
 



  return (
    <BrowserRouter>
    <NavBar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/pizza/:nombre" element={<Pizza />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
