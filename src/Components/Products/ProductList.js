import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const ProductList = () => {
  const products = useSelector((state) => state.product.products);

  return (
    <div className="ui grid container">
      <Product />
    </div>
  );
};

export default ProductList;
