import { useState, useEffect } from "react";
import "./Dashboard.css";
export const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div>
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
