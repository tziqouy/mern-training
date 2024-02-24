import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}>
            <Route path="" element={<Home/>}></Route>
            <Route path="/dashboard/employee" element={<h1>Employee</h1>}></Route>
            <Route path="/dashboard/profile" element={<h1>Profile</h1>}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
