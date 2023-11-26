const express = require("express");
const cors = require("cors");
const db = require("./database");
const port = 4444;

const app = express();
app.use(cors());
app.use(express.json());

if (db) {
  console.log("Database status: GOOD");
} else {
  console.log("Database status: BAD");
}

// app.get("/", (req, res) => {
//   res.json({ message: "Hello World"});
// });

app.get("/api/subjects", (req, res) => {
  const sql = "SELECT * FROM subjects";
  db.query(sql, (err, results) => {
    if (err) console.err("Error querying database: ", err);
    res.json(results);
  });
});

app.get("/api/schedule/:weekday_id/12-12-1234", (req, res) => {
  const { weekday_id } = req.params
  const sql = "SELECT * FROM subjects WHERE weekday_id = ?";
  db.query(sql, [weekday_id], (err, results) => {
    if (err) console.err("Error querying database: ", err);
    res.json(results);
  });
});

app.get("/api/checklist", (req, res) => {
  const sql = "SELECT * FROM checklist";
  db.query(sql, (err, results) => {
    if (err) console.err("Error querying database: ", err);
    res.json(results);
  });
});

app.get("/api/students", (req, res) => {
  const sql = "SELECT * FROM students";
  db.query(sql, (err, results) => {
    if (err) console.err("Error querying database: ", err);
    res.json(results);
  });
});

app.get("/api/weekday", (req, res) => {
  const sql = "SELECT * FROM weekday";
  db.query(sql, (err, results) => {
    if (err) console.err("Error querying database: ", err);
    res.json(results);
  });
});

app.get("/api/teachers", (req, res) => {
  const sql = "SELECT * FROM teachers";
  db.query(sql, (err, results) => {
    if (err) console.err("Error querying database: ", err);
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Backend Listening to port: ${port}`);
});
