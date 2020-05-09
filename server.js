const mysql = require("mysql");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

//mysql connection
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "inspiron",
  database: "quiz",
});

//connecting to database
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected to db!");
  var sql =
    "CREATE TABLE choices (choices_id int AUTO_INCREMENT PRIMARY KEY,question_id int,choice VARCHAR(255),is_correct BOOLEAN)";
  // var sql =
  // "CREATE TABLE question (question_id int AUTO_INCREMENT PRIMARY KEY,question VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table altered");
  });
});

// app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("helloworld");
});

const PORT = process.env.PORT || 5000;

// define routes
// app.use("/api/quiz", require("./routes/quiz")); //get all, update, delete
// app.use("/api/setting", require("./routes/setting"));

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
