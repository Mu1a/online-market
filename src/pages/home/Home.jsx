import React from "react";
import "./Home.css";
import { useProductsQuery } from "../../services/productApi";
import Product from "../../Product/Product";
function Home() {
  const { data, error, isLoading, isSuccess } = useProductsQuery();
  return (
    <div>
      <h1>Products</h1>
      <div className="home">
        {isLoading && <h1>Loading...</h1>}
        {isSuccess &&
          data.map((product) => (
            <div className="product_list">
              <Product key={product.id} {...product} product={product} />
            </div>
          ))}
      </div>
    </div>
  );
}
export default Home;
