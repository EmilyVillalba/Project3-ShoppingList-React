import React from "react";
import { useNavigate } from "react-router-dom";
import ShopForm from './ShopForm';

function AddProduct({ onAdd }) {
  const navigate = useNavigate();

  function handleAdd(newItem) {
    onAdd(newItem);
    navigate("/");
  }

  return <ShopForm initialData={{ product: "", quantity: "", price:"", status: false }} onSubmit={handleAdd} />;
}

export default AddProduct;