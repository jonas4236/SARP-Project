const express = require("express");
const cors = require("cors");
const db = require("./database");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const port = 4444;

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

if (db) {
  console.log("Database status: GOOD");
} else {
  console.log("Database status: BAD");
}

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ Error: "You are not authenticated" });
  } else {
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
      if (err) {
        return res.json({ Error: "Token is not valid" });
      } else {
        req.username = decoded.username;
        next();
      }
    });
  }
};

app.get("/", verifyUser, (req, res) => {
  return res.json({ status: "success", username: req.username });
});

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
app.get("/api/checklist/:day-:month-:year", (req, res) => {
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

// ROUTE ADD STUDENT TO DATABASE
app.post("/api/create", (req, res) => {
  const Date = req.body.Date;
  const teacher = req.body.teacher;
  const subject = req.body.subject;
  const Stu1 = req.body.Stu1;
  const Stu2 = req.body.Stu2;
  const Stu3 = req.body.Stu3;
  const Stu4 = req.body.Stu4;
  const Stu5 = req.body.Stu5;
  const Stu6 = req.body.Stu6;
  const Stu7 = req.body.Stu7;
  const Stu8 = req.body.Stu8;
  const Stu9 = req.body.Stu9;
  const Stu10 = req.body.Stu10;

  const sql =
    "INSERT INTO checklist (Date,teacher, subject, Stu1, Stu2, Stu3, Stu4, Stu5, Stu6, Stu7, Stu8, Stu9, Stu10) VALUE (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  db.query(
    sql,
    [
      Date,
      teacher,
      subject,
      Stu1,
      Stu2,
      Stu3,
      Stu4,
      Stu5,
      Stu6,
      Stu7,
      Stu8,
      Stu9,
      Stu10,
    ],
    (err, results) => {
      if (err) console.log("Error adding checklist: ", err);
      res.json(results);
    }
  );
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM staff WHERE email = ?";

  db.query(sql, [email], (err, results) => {
    if (err) return res.json({ Error: "login failed to server!" });
    if (results.length === 0) {
      return res.json({ Error: "Invalid email or password." });
    }

    if (password === results[0].password) {
      const username = results[0].username;
      const token = jwt.sign({ username }, "jwt-secret-key", {
        expiresIn: "1h",
      });
      res.cookie("ac-token", token);
      return res.json({ status: "success" });
    } else {
      return res.json({ error: "Invalid email or password!" });
    }
  });
});

app.get("/api/logout", (req, res) => {
  res.clearCookie("ac-token");
  return res.status(200).json({ status: "success" });
});

app.listen(port, () => {
  console.log(`Backend Listening to port: ${port}`);
});
