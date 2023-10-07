import { useState, useEffect } from "react";
import "./Dashboard.css";
import { Filter } from "./Filter";

const GET_PRODUCTS_URL = "https://fakestoreapi.com/products";

export const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState(null);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  useEffect(() => {
    const url =
      productId !== null
        ? GET_PRODUCTS_URL + "/" + productId
        : GET_PRODUCTS_URL;

    fetch(url)
      .then((res) => res?.json())
      .then((json) => {
        const data = productId != null ? [json] : json;
        setProducts(data);
      });
  }, [productId]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=" + rowsPerPage)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [rowsPerPage]);

  const handleProductIdChange = (event) => {
    setProductId(parseInt(event.target.value));
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value));
  };

  const hanldeWindowResize = () => {
    console.log(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", hanldeWindowResize);
    return () => {
      //clearup code
      window.removeEventListener("resize", hanldeWindowResize);
    };
  }, []);

  return (
    <div>
      <div className="product-container">
        {products.map((x) => (
          <div className="product">
            <img height="50px" width="60px" src={x.image} alt="" />
            <p>Model: {x.model}</p>
            <p>Price: {x.price > 0 ? "$ " + x.price : "Not available"} </p>
          </div>
        ))}
      </div>
    </div>
  );
};
