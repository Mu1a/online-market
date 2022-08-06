import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/nav/Nav";
import Basket from "./pages/backet/Basket";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/registr/Register";
import ProductDetail from "./ProductDetail/ProductDetail";
import ProtectedRoutes from "./ProtectedRoutes";
import {getUser} from "./redux/userSlice"
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const userr = JSON.parse(localStorage.getItem("user"));
    dispatch(getUser(userr));
  }, [dispatch]);

  useEffect(() => {
    const userr = JSON.parse(localStorage.getItem("user"));
    dispatch(getUser(userr));
  }, []);
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/backet" element={<Basket />} />

          <Route path="/productDetail/:id" element={<ProductDetail />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
