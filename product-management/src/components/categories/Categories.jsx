import React, { useState, useEffect } from "react";
import { useApi } from "../custom-hooks/useApi";
import { LoaderContainerDiv, LoaderImage } from "./Categories.style";

export const Categories = () => {
  const [data, error, loading] = useApi(
    "https://fakestoreapi.com/products/categories"
  );

  return (
    <div>
      {data.length > 0 ? JSON.stringify(data) : ""}
      <div>{error}</div>
      <LoaderContainerDiv>
        {loading && <LoaderImage alt="loading" src="icons8-spinner.gif" />}
      </LoaderContainerDiv>
    </div>
  );
};
