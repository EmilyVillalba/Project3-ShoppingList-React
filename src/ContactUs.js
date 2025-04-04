import React from "react";

function ContactUs()
{
    return (
        <form >
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="email"
            className="form-control"
            placeholder="Last Name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="name@example.com"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Send us a message</label>
          <input
            as="textarea"
            rows={3}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-info" onClick={"/"}>Submit</button>
      </form>
      );
}

export default ContactUs;