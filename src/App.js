import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Shared/Login/Login";
import Register from "./pages/Shared/Register/Register";
import "./App.css";
import NotFound from "./pages/NotFound/Notfound";
import Header from "./pages/Shared/Header/Header";
import AllServices from "./pages/Home/Services/AllServices";
import FindCar from "./pages/Home/FindCar/FindCar";
import FindBasisBrand from "./pages/Home/FindCar/FindBasisBrand/FindBasisBrand";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="car/:carName" element={<FindBasisBrand />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
