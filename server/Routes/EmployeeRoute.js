import express from 'express';
import db from '../utils/db.js';

const router = express.Router();

router.get('/employees', (req, res) => {
    const sql = `SELECT * FROM users`;
    db.query(sql, (err, result) => {
        if (err) {
            res.json({ Status: false, errorMessage: err });
        } else {
            res.json({ Status: true, Result: result });
        }
    });
});

export { router as employeeRouter };
