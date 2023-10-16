import React, { useState, useEffect, useCallback } from "react";
import "./Dashboard.css";
import { Filter } from "./Filter";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
}

const GET_PRODUCTS_URL = "https://fakestoreapi.com/products";

export const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productId, setProductId] = useState<number | null>(null);
  const [rowsPerPage, setRowsPerPage] = useState<number>(20);
  const [value, setValue] = useState<string>("");
  const navigate = useNavigate();

  const [principle, setPrinciple] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);

  const handleNavigation = (id: number) => {
    navigate("/product-details/" + id);
  };

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

  const handleProductIdChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setProductId(parseInt(event.target.value));
  }, []);

  const handleRowsPerPageChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value));
  }, []);

  const handleWindowResize = () => {
    console.log(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      //cleanup code
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div>
      <Filter
        productId={productId}
        rowsPerPage={rowsPerPage}
        onProductIdChange={handleProductIdChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((x) => {
            return (
              <tr key={x.id}>
                <td>{x.id}</td>
                <td>{x.title}</td>
                <td>{x.category}</td>
                <td>{x.price}</td>
                <td>
                  <button onClick={() => handleNavigation(x.id)}>
                    View Details
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};