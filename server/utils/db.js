import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hunkbako@101",
  database: "nuriko_app",
});

db.connect((err) => {
  if (err) {
    console.log("Error connecting to database :", err);
  }
  console.log("Connected to database!");
});

export default db;
