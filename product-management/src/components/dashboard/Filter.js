import React from "react";

export const Filter = ({
  productId,
  rowsPerPage,
  onProductIdChange,
  onRowsPerPageChange,
}) => {
  return (
    <div>
      <label for="product-id">Product Id:</label>
      <input
        value={productId}
        onChange={onProductIdChange}
        id="product-id"
        type="text"
      />
      <label for="product-id">Rows Per Page:</label>
      <select value={rowsPerPage} onInput={onRowsPerPageChange}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
    </div>
  );
};
