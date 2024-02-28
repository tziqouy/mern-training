import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const addCapability = () => {
  const [capability, setCapaddCapability] = useState({ name: "" });
  const [error, setError] = useState();
  const navigate = useNavigate();

  const capabilitySubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/capabilities/add", capability)
      .then((res) => {
        if (res.data.Status) {
          console.log(res.data);
          navigate("/dashboard/capabilities");
        } else {
          setError(res.data.errorMessage);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items mt-3">
      <div className="card w-50 mb-3">
        <div className="card-header text-black">
          <h5 className="d-flex justify-content-center">
            <strong>Add Capability</strong>
          </h5>
        </div>
        <div className="card-body card">
          <form onSubmit={capabilitySubmit}>
            <div className="form-group">
              <label>
                <strong>Name</strong>
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                onChange={(e) => {
                  setCapaddCapability({
                    ...capability,
                    name: e.target.value,
                  });
                }}
              />
            </div>
            <div className="col-12 mt-3">
              <button type="submit" className="btn btn-primary w-100">
                <i className="bi bi-send-plus-fill"></i> Submit
              </button>
            </div>
            <div className="col-12 mt-2">
              <Link
                to="/dashboard/capability"
                type="button"
                className=" btn btn-danger w-100"
              >
                <i className="bi bi-chevron-double-left"></i> Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default addCapability;
