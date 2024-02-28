import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    firstname: "",
    lastname: "",
    gender: 0,
    email: "",
    password: "hunkbako@101",
  });
  const [selectedOption, setSelectedOption] = useState("0");
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const employeeSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/employee/add", employee)
      .then((res) => {
        if (res.data.Status) {
          console.log(res.data);
          navigate("/dashboard/employee");
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
            <strong>Add Employee</strong>
          </h5>
        </div>
        <div className="card-body card">
          <form onSubmit={employeeSubmit}>
            <div className="form-group">
              <label>
                <strong>Fistname</strong>
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Enter firstname"
                onChange={(e) => {
                  setEmployee({ ...employee, firstname: e.target.value });
                }}
              />
            </div>
            <div className="form-group">
              <label>
                <strong>Lastname</strong>
              </label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                placeholder="Enter Lastname"
                onChange={(e) => {
                  setEmployee({ ...employee, lastname: e.target.value });
                }}
              />
            </div>
            <div className="form-group">
              <label>
                <strong>Gender</strong>
              </label>
              <select
                id="gender"
                className="form-control"
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option selected>Select Gender</option>
                <option value="0">Male</option>
                <option value="1">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label>
                <strong>Email</strong>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                onChange={(e) => {
                  setEmployee({ ...employee, email: e.target.value });
                }}
              />
            </div>
            <div className="form-group">
              <label>
                <strong>Password</strong>
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="password"
                onChange={(e) => {
                  setEmployee({ ...employee, password: e.target.value });
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
                to="/dashboard/employee"
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

export default AddEmployee;
