import React, { useState } from "react";
import { useSelector } from "react-redux";
import ChosenPro from "../../Components/chosenPro/chosenPro";
import { useAddShopMutation } from "../../services/shopApi";
import "./Basket.css";

function Backet() {
  const [addShop, result] = useAddShopMutation();
  const [mahsulotNam, setMahsulotNam] = useState("");
  const [kg, setKg] = useState("");
  const [userNam, setUserNam] = useState("");
  const [tel, setTel] = useState("");
  const [location, setLocation] = useState("");
  const products = useSelector((state) => state.product.products);

  const handleAddShop = async (e) => {
    e.preventDefault();
    const shop = {
      mahsulotNam,
      kg,
      userNam,
      tel,
      location,
    };
    await addShop(shop);
  };
  return (
    <div className="basket_list">
      {products.length > 0 &&
        products.map((product) => (
          <ChosenPro key={product.id} {...product} product={product} />
        ))}
      <form onSubmit={handleAddShop}>
        <input
          type="text"
          onChange={(e) => setMahsulotNam(e.target.value)}
          placeholder="product name"
        />
        <input
          type="text"
          onChange={(e) => setKg(e.target.value)}
          placeholder="kg/namber"
        />
        <input
          type="text"
          onChange={(e) => setUserNam(e.target.value)}
          placeholder="user name"
        />
        <input
          type="text"
          onChange={(e) => setLocation(e.target.value)}
          placeholder="location"
        />
        <input
          type="text"
          onChange={(e) => setTel(e.target.value)}
          placeholder="tel +998(9*)***-**-**"
        />
        <button>buy</button>
      </form>
    </div>
  );
}

export default Backet;
