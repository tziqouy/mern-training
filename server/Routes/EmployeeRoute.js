import express from "express";
import db from "../utils/db.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.get("/employees", (req, res) => {
  const sql = `SELECT * FROM users`;
  db.query(sql, (err, result) => {
    if (err) {
      res.json({ Status: false, errorMessage: err });
    } else {
      res.json({ Status: true, Result: result });
    }
  });
});

router.post("/employee/add", (req, res) => {
  const sql = `INSERT INTO users (firstname, lastname, gender, email, password) VALUES (?)`;
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      res.json({ Status: false, errorMessage: err });
    }
    const values = [
      req.body.firstname,
      req.body.lastname,
      req.body.gender,
      req.body.email,
      hash,
    ];
    db.query(sql, [values], (err, result) => {
      if (err) {
        res.json({ Status: false, errorMessage: err });
      } else {
        res.json({ Status: true, Result: result });
      }
    });
  });
});

export { router as employeeRouter };
