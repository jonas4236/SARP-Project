const express = require("express");
const cors = require("cors");
const db = require("./database");
const port = 4236;

const app = express();
app.use(cors());
app.use(express.json())

if (db) {
  console.log("Database status: GOOD");
} else {
  console.log("Database status: BAD");
}

app.get("/", (req, res) => {
  res.json({ message: "Hello World"});
});

app.listen(port, () => {
  console.log(`Backend Listening to port: ${port}`);
});

