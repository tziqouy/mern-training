import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import EmployeeList from "./Components/Employees/EmployeeList";
import AddEmployee from "./Components/Employees/AddEmployee";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}>
            <Route path="" element={<Home/>}></Route>
            <Route path="/dashboard/profile" element={<h1>Profile</h1>}></Route>
            <Route path="/dashboard/employee" element={<EmployeeList/>}></Route>
            <Route path="/dashboard/addEmployee" element={<AddEmployee/>}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
