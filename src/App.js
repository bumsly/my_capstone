import Main from "./pages/Main";
import Nav from "./pages/Nav";
import Map from "./pages/Map";
import Inventory from "./pages/Inventory";
import Luckybox from "./pages/Luckybox";
import Shop from "./pages/Shop";
import Guide from "./pages/Guide";
import Login from "./pages/Login";
import Head from "./pages/Head";

import "./css/App.css";
import "./css/reset.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/map" element={<Map />} />
        <Route exact path="/inventory" element={<Inventory />} />
        <Route exact path="/luckybox" element={<Luckybox />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/guide" element={<Guide />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/head" element={<Head />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
