import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ShopForm from './ShopForm';

function EditProduct({items, onUpdate}){
    const {id} = useParams();
    const navigate = useNavigate();
    const item = items.find((i) => i.id === parseInt(id))

    if(!item) return <p>Product not found!</p>

    function handleUpdate(updatedItem){
        onUpdate(updatedItem)
        navigate("/");

    }

    return <ShopForm initialData={item} onSubmit = {handleUpdate}/>
}

export default EditProduct;