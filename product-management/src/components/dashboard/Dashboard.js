import { useState, useEffect, useCallback, useMemo } from "react";
import "./Dashboard.css";
import { Filter } from "./Filter";
import { useNavigate } from "react-router-dom";

const GET_PRODUCTS_URL = "https://fakestoreapi.com/products";

export const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState(null);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const [principle, setprinciple] = useState(0);
  const [time, setTime] = useState(0);
  const [rate, setRate] = useState(0);

  const handleNavigation = (id) => {
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

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products?limit=" + rowsPerPage)
  //     .then((res) => res.json())
  //     .then((json) => setProducts(json));
  // }, [rowsPerPage]);

  const handleProductIdChange = useCallback((event) => {
    setProductId(parseInt(event.target.value));
  }, []);

  const handleRowsPerPageChange = useCallback((event) => {
    setRowsPerPage(parseInt(event.target.value));
  }, []);

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

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const calculateIntrest = useMemo(() => {
    return (principle * time * rate) / 100;
  }, [principle, time, rate]);

  console.log(calculateIntrest);
  console.log(calculateIntrest);
  console.log(calculateIntrest);

  return (
    <div>
      <div>
        <input value={value} type="text" onChange={handleInputChange} />
      </div>
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
              <tr>
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
