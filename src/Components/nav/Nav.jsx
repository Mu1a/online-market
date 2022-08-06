import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Nav.css";
function Nav() {
  const products = useSelector((state) => state.product.products);

  return (
    <nav>
      <Link className="link" to={"/"}>
        Home
      </Link>
      <Link className="link" to={"register"}>
        Register
      </Link>
      <Link className="link" to={"backet"}>
        Backet ({products.length})
      </Link>
      <Link className="link" to={"login"}>
        Login
      </Link>
    </nav>
  );
}

export default Nav;
