import express from "express";
import db from "../utils/db.js";

const router = express.Router();

router.get("/", (req, res) => {
  const sql = `SELECT * FROM capabilities`;
  db.query(sql, (err, result) => {
    if (err) {
      res.json({ Status: false, errorMessage: err });
    } else {
      res.json({ Status: true, Result: result });
    }
  });
});

router.post("/add", (req, res) => {
  const sql = `INSERT INTO capabilities (name) VALUES (?)`;
  const values = [req.body.name];
  db.query(sql, [values], (err, result) => {
    if (err) {
      res.json({ Status: false, errorMessage: err });
    } else {
      res.json({ Status: true, Result: result });
    }
  });
});

export { router as capabilityRouter };
