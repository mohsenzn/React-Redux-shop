import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProduct } from "../../features/prdouctsSlice";
import Product from "./Product";

const ProductList = () => {
  const products = useSelector((state) => state.product.products);
  const disptach = useDispatch();
  const fetchProducts = async () => {
    const respon = await axios
      .get(`https://fakestoreapi.com/products`)
      .catch((erro) => {
        console.log("err", erro);
      });
    disptach(setProduct(respon.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="ui grid container">
      <Product />
    </div>
  );
};

export default ProductList;
