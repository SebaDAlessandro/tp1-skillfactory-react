import NavBar from "./components/navbar/NavBar";
import Form from "./components/form/Form";
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Usuarios from "./components/usuarios/Usuarios";
import RickMorty from './components/rickMorty/RickMorty'
import CharacterDetail from "./components/characterDetail/CharacterDetail";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/form"
            element={<Form />}
          />
          <Route
            path="/usuarios"
            element={<Usuarios />}
          />
          <Route 
            path="/rickmorty/:page"
            element={<RickMorty />}
          />
          <Route 
            path="/CharacterDetail/:id/:page"
            element={<CharacterDetail />}
          />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
