import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "backend_db",
});

db.connect((err) => {
  if (err) {
    console.log("Error while connecting to Database", err);
  } else {
    console.log("Database connected successfully");
  }
});

export default db;
