const express = require("express");
const router = express.Router();
const mysqlConnection = require("../connection");

router.get("/", (req, res) => {
  console.log("requesting");
  const ques = [];
  var x = {};
  mysqlConnection.query("SELECT * FROM question", (err, rows, field) => {
    if (err) return res.json({ error: err });
    rows.map((row) => {
      mysqlConnection.query(
        `select choice,is_correct from choice where question_id=${row.question_id}`,
        (err, ch) => {
          if (err) return res.send(err);
          x = { ...ch };
          ques.push({ ...row });
          // console.log(ques);
          // console.log("\n\n\n\n");
        }
      );
    });
    console.log(ques, x);

    res.json({ rows });
  });
});

router.post("/", (req, res) => {
  mysqlConnection.query(
    `insert into question(question) value ('${req.body.question}')`,
    (err, rows, field) => {
      if (err) return res.json({ error: err });

      res.send("posted");
    }
  );
});

module.exports = router;
