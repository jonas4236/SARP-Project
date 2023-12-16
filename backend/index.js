const express = require("express");
const cors = require("cors");
const db = require("./database");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const port = process.env.PORT;
const ProtectAuth = require("./middlewares/ProtectAuth");
const ProtectAdd = require("./middlewares/ProtectAdd");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const allowedOrigins = [
  "http://localhost:5173",
  "https://sarp-a8dff5e6e541.herokuapp.com",
  "https://sarp-git-main-jnasdev.vercel.app",
  "https://sarp-r3nz8l29h-jnasdev.vercel.app",
  "https://sarp-jnasdev.vercel.app",
  "https://sarp.vercel.app",
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
    exposedHeaders: ["Content-Length", "ac_token"], // เพิ่ม exposedHeaders
  })
);

app.options("*", cors());

if (db) {
  console.log("Database status: GOOD");
} else {
  console.log("Database status: BAD");
}

// app.get("/add", ProtectAdd, (req, res, next) => {
//   res.send("Redirected to main page");
// });

// app.get("/login", ProtectAuth, (req, res, next) => {
//   res.send("Redirected to main page");
// });

app.post("/api/login/users", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], (err, results) => {
    if (err) return res.json({ Error: "Login failed to the server!" });
    if (results.length === 0) {
      return res.json({ Error: "Invalid email or password." });
    }

    const user = results[0];

    if (password === user.password) {
      const username = user.username;
      const isAdmin = user.isAdmin;
      const token = jwt.sign({ username }, "jwt-secret-key", {
        expiresIn: "1h",
      });
      res.cookie("ac_token", token, { sameSite: "None", secure: true });
      return res
        .status(200)
        .json({ results: user, isAdmin: isAdmin, status: "success" });
    } else {
      return res.json({ error: "Invalid email or password!" });
    }
  });
});

app.post("/api/login/staff", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM staff WHERE email = ?";

  db.query(sql, [email], (err, results) => {
    if (err) return res.json({ Error: "Login failed to the server!" });
    if (results.length === 0) {
      return res.json({ Error: "Invalid email or password." });
    }

    const user = results[0]; // Corrected variable name

    if (password === user.password) {
      const username = user.username;
      const token = jwt.sign({ username }, "jwt-secret-key", {
        expiresIn: "1h",
      });
      res.cookie("ac_token", token, { sameSite: "None", secure: true });
      return res.status(200).json({ results: user, status: "success" });
    } else {
      return res.json({ error: "Invalid email or password!" });
    }
  });
});

app.get("/api/logout", (req, res) => {
  res.clearCookie("ac_token");
  return res.status(200).json({ status: "success" });
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

// This code uses a JOIN operation to combine data from the "subjects" and "staff" tables where the "weekday_id" values match. It filters the results based on the provided "username" in the URL parameter. This should give you the desired result, similar to the original MySQL query you provided.
app.get("/api/staff/:username", (req, res) => {
  const { username } = req.params;
  const sql =
    "SELECT subjects.* FROM subjects JOIN users ON subjects.weekday_id = users.subject WHERE users.username = ?";
  db.query(sql, [username], (err, results) => {
    if (err) console.log("Error querying database: ", err);
    res.json({ status: "success", results: results });
  });
});

app.post("/api/support", (req, res) => {
  const { day, message } = req.body;
  const sql = "INSERT INTO help (date, message) VALUES (?, ?)";
  db.query(sql, [day, message], (err, results) => {
    if (err) console.log("err added help: ", err);
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

app.listen(port, () => {
  console.log(`Backend Listening to port: ${port}`);
});
