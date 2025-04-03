import React, { useState } from "react";
import {Link} from "react-router-dom";

function ProductList({items , onDelete})
{
  const [filterStatus , setFilterStatus] = useState('All');

 
  const filteredItems = items.filter(item => {
     return (filterStatus === 'All' || (filterStatus === 'Purchased' && item.status) || (filterStatus === 'Not Purchased' && !item.status))
  });

    return (

      <div>
          <div className="mb-2 mt-2 col-3">
              <select className="form-select" onChange={(e) => setFilterStatus(e.target.value)}>
                 <option value='All'>All</option>
                 <option value='Purchased'>Purchased</option>
                 <option value='Not Purchased'>Not Purchased</option>
              </select>
          </div>

        <div className="table-responsive mt-4">
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Expected Price</th>
                <th>Purchased</th>
                <th>Edit / Delete</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.product}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{item.status === true ? 'Purchased' : 'Not Purchased'}</td>                 
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