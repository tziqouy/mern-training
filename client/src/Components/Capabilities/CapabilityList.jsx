import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";

const CapabilityList = () => {
  const [capability, setCapability] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/capabilities")
      .then((res) => {
        if (res.data.Status) {
          setCapability(res.data.Result);
        } else {
          console.log(res.data.errorMessage);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="px-5 mt-3">
      <Link to="/dashboard/capabilities/add" className="btn btn-success btn-md">
        <i className="bi bi-person-fill-add"></i>
      </Link>
      <div className="card mt-3">
        <span className="card-header">
          <h5>
            <strong>Capabilities</strong>
          </h5>
        </span>
        <div className="card-body">
          <table className="table">
            <thead className="table table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {capability.map((capab) => {
                return (
                  <tr key={capab.id}>
                    <td>{capab.id}</td>
                    <td>{capab.name}</td>
                    <td>
                      {/* <Link
                        to={`/dashboard/viewCapability/${capab.id}`}
                        className="btn btn-primary btn-sm me-2"
                      >
                        <i className="bi bi-eye-fill"></i>
                      </Link> */}
                      <Link
                        to={`/dashboard/capabilities/edit/${capab.id}`}
                        className="btn btn-warning btn-sm me-2"
                      >
                        <i className="bi bi-pencil-fill"></i>
                      </Link>
                      <Link
                        to={`/dashboard/deleteCapability/${capab.id}`}
                        className="btn btn-danger btn-sm me-2"
                      >
                        <i className="bi bi-trash-fill"></i>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CapabilityList;
