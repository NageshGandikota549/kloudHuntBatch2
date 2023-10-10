import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState(null);
  const params = useParams();

  const id = params.id;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json())
      .then((json) => setProductDetails(json));
  }, []);

  return (
    <div>
      product details...
      {productDetails && JSON.stringify(productDetails)}
    </div>
  );
};
