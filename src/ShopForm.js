import React, { useState } from "react";

function ShopForm({initialData , onSubmit})
{

    const [formData, setFormData] = useState(initialData)

    function handleChange(event)
    {
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    function handleSubmit(event)
    {
        event.preventDefault();
        onSubmit(formData);
    }

    function handlePurchasedChange()
    {
       setFormData({...formData, purchased: !formData.purchased})
    }

    return (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Product</label>
            <input
              type="text"
              name="product"
              className="form-control"
              value={formData.product}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Quantity</label>
            <input
              type="text"
              name="quantity"
              className="form-control"
              value={formData.quantity}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Expected Price</label>
            <input
              type="text"
              name="price"
              className="form-control"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 form-check">
              <input 
                type="checkbox"
                className="form-check-input"
                checked={formData.purchased}
                onChange={handlePurchasedChange} 
              />
              <label className="form-check-label"> Mark Purchased</label>
          </div>
          <button type="submit" className="btn btn-info">Save</button>
        </form>
      );
}

export default ShopForm;