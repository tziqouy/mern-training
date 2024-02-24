import express from "express";
import db from "../utils/db.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/login", (req, res) => {
  const sql = `SELECT * FROM users WHERE email = ? AND password = ?`;
  db.query(sql, [req.body.email, req.body.password], (err, result) => {
    if (err) {
      res.json({ loginStatus: false, Error: err });
    } else {
      if (result.length > 0) {
        const email = result[0].email;
        const token = jwt.sign({ email }, "secretKey", { expiresIn: "1d" });
        res.cookie("token", token, {
          httpOnly: true,
          sameSite: "none",
          secure: true,
        });
        res.json({ loginStatus: true, token });
      } else {
        res.json({ loginStatus: false, errorMessage: "Invalid email or password" });
      }
    }
  });
});

export { router as loginRouter };
