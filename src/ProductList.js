import React, { useState } from "react";
import {Link} from "react-router-dom";


function ProductList({items , onDelete})
{
  const [filterPurchased , setFilterPurchased] = useState('All');

  const filteredItems = items.filter(item => {
     return (filterPurchased === "All" || (filterPurchased === "Purchased" && item.purchased) || (filterPurchased === "Not Purchased" && !item.purchased))
  });
  
    return (

      <div>
          <div className="mb-2 mt-2 col-3">
              <select className="form-select" onChange={(e) => setFilterPurchased(e.target.value)}>
                 <option value='All'>All</option>
                 <option value="Purchased">Purchased</option>
                 <option value="Not Purchased">Not Purchased</option>
              </select>
          </div>

        <div className="table-responsive mt-4">
          <table id="total" className="table table-bordered">
            <thead className="table-secondary">
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Expected Price</th>
                <th>Purchased</th>
                <th>Edit / Delete</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.product}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{item.purchased === true ? 'Purchased' : 'Not Purchased'}</td>                 
                  <td>
                    <Link className="btn btn-secondary btn-sm me-2" to={`/edit/${item.id}`}>Edit</Link>
                    <button className="btn btn-secondary btn-sm" onClick={() => onDelete(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      );
}

export default ProductList;