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


// ROUTE ALL SUBJECTS
app.get("/api/subjects", (req, res) => {
  const sql = "SELECT * FROM subjects";
  db.query(sql, (err, results) => {
    if (err) console.err("Error querying database: ", err);
    res.json(results);
  });
});

// ROUTE SINGLE DAY
app.get("/api/schedule/:weekday_id", (req, res) => {
  const { weekday_id } = req.params;
  const sql = "SELECT * FROM subjects WHERE weekday_id = ?";
  db.query(sql, [weekday_id], (err, results) => {
    if (err) console.err("Error querying database: ", err);
    res.json(results);
  });
});

// ROUTE ALL CHECKLISTS
app.get("/api/checklist", (req, res) => {
  const sql = "SELECT * FROM checklist";
  db.query(sql, (err, results) => {
    if (err) console.err("Error querying database: ", err);
    res.json(results);
  });
});

// ROUTE SINGLE CHECKLIST
app.get("/api/checklist/:year/:month/:day", (req, res) => {
  const { year, month, day } = req.params;
  const formattedDate = `${year}/${month}/${day}`;
  const sql = "SELECT * FROM checklist WHERE Date = ?";
  db.query(sql, [formattedDate], (err, results) => {
    if (err) console.err("Error querying database: ", err);
    res.json(results);
  });
});


// ROUTE ALL STUDENTS
app.get("/api/students", (req, res) => {
  const sql = "SELECT * FROM students";
  db.query(sql, (err, results) => {
    if (err) console.err("Error querying database: ", err);
    res.json(results);
  });
});

// ROUTE ALL WEEKDAYS
app.get("/api/weekday", (req, res) => {
  const sql = "SELECT * FROM weekday";
  db.query(sql, (err, results) => {
    if (err) console.err("Error querying database: ", err);
    res.json(results);
  });
});

// ROUTE ALL TEACHERS
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
