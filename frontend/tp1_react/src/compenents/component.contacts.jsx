import React from "react";
import { Link } from "react-router-dom";

import "../../src/contacts.css";

export function Contacts() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="container mt-5 shadow">
      <div className="row">
        <div className="col-md-4 bg-primary p-5 text-white order-sm-first order-last">
          <h2>Let's get in touch</h2>
          <p>We're open for any suggestion or just to have a chat</p>
          <div className="d-flex mt-2">
            <i className="bi bi-geo-alt"></i>
            <p className="mt-3 ms-3">
              Address : Road 198 West 21th Street, Suite 721 Singapor WW 10016
            </p>
          </div>
          <div className="d-flex mt-2">
            <i className="bi bi-telephone-forward"></i>
            <p className="mt-4 ms-3">Phone : 8888888888</p>
          </div>
          <div className="d-flex mt-2">
            <i className="bi bi-envelope"></i>
            <p className="mt-4 ms-3">Email : contactform@gmail.com</p>
          </div>
          <div className="d-flex mt-2">
            <i className="bi bi-youtube"></i>
            <p className="mt-4 ms-3">Channel : www.contactform.com/</p>
          </div>
        </div>
        <div className="col-md-8 p-5 ">
          <h2>Get in touch</h2>
          <form className="row g-3 contactForm mt-4" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input type="text" className="form-control" id="firstName" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input type="text" className="form-control" id="lastName" required />
            </div>
            <div className="col-12">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input type="text" className="form-control" id="subject" required />
            </div>
            <div className="col-12">
              <label htmlFor="email" className="form-label">
                Email Id
              </label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input type="text" className="form-control" id="city" />
            </div>
            <div className="col-md-6">
              <label htmlFor="contactNumber" className="form-label">
                Contact Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="contactNumber"
                required
              />
            </div>
            <div className="col-12">
              <button type="submit" className="sub">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
