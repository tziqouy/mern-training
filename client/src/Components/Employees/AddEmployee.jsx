import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

const AddEmployee = () => {
  return (
    <div className='d-flex justify-content-center align-items mt-3'>
        <div className="card w-50 mb-3">
            <div className="card-header text-black">
                <h5 className='d-flex justify-content-center'><strong>Add Employee</strong></h5>
            </div>
            <div className="card-body card">
                <form>
                        <div className="form-group">
                            <label><strong>Fistname</strong></label>
                            <input type="text" className="form-control" id="inputEmail4" placeholder="Enter firstname"/>
                        </div>
                        <div className="form-group">
                            <label><strong>Lastname</strong></label>
                            <input type="text" className="form-control" id="lastname" placeholder="Enter Lastname"/>
                        </div>
                        <div className="form-group">
                            <label><strong>Gender</strong></label>
                            <select id="gender" className="form-control">
                                <option selected>Select Gender</option>
                                <option value="0">Male</option>
                                <option value="1">Female</option>
                            </select>
                        </div>
                    <div className="form-group">
                        <label><strong>Email</strong></label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label><strong>Password</strong></label>
                        <input type="password" className="form-control" id="password" placeholder="password"/>
                    </div>
                    <div className="col-12 mt-3">
                        <button type="submit" className="btn btn-primary w-100">
                            <i className="bi bi-send-plus-fill"></i>  Submit
                        </button>
                    </div>
                    <div className="col-12 mt-2">
                        <Link to='/dashboard/employee' type="button" className=" btn btn-danger w-100">
                            <i className="bi bi-chevron-double-left"></i>  Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>

  )
}

export default AddEmployee;
