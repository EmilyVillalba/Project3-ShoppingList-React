import React from "react";
import { Link } from "react-router-dom";


function ShopLayout({children}) 
{
    return (

         <div className="container mt-4">
            <h1 className="text-center mb-4">My Shopping List</h1>
            <nav>
                <Link className="btn btn-info me-2" to="/">Home</Link>
                <Link className="btn btn-info" to="/add">Add Product</Link>
                <Link className="btn btn-info" to="/contact">Contact Us</Link>
            </nav>
            {children}
         </div>
         
    )
}

export default ShopLayout;