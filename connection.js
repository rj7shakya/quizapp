//mysql connection
const mysql = require("mysql");
var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "inspiron",
  database: "quiz",
});

//connecting to database
mysqlConnection.connect(function (err) {
  if (err) throw err;
  console.log("Connected to db!");
});

module.exports = mysqlConnection;
