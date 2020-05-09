const express = require("express");
const router = express.Router();
const mysqlConnection = require("../connection");

router.get("/:id", (req, res) => {
  mysqlConnection.query(
    `SELECT * FROM choice WHERE question_id=${req.params.id}`,
    (err, rows, field) => {
      if (err) return res.json({ error: err });

      res.json({ rows });
    }
  );
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
