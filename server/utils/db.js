import mysql from "mysql2";

const db = mysql.createConnection({
    host: "localhost",
    user: "root", // Replace with your MySQL username
    password:"hunkbako@101", // Replace with your MySQL password
    database: "nuriko_app",
});

db.connect((err) => {
    if (err) {
        console.log("Error connecting to database :", err);
    }
    console.log("Connected to database!");
});

export default db;
