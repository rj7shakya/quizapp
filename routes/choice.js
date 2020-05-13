const express = require("express");
const router = express.Router();
const Choice = require("../models/choice");

router.get("/:id", (req, res) => {
  // mysqlConnection.query(
  //   `SELECT choice,is_correct  FROM choice WHERE question_id=${req.params.id}`,
  //   (err, rows, field) => {
  //     if (err) return res.json({ error: err });

  //     res.json({ rows });
  //   }
  // );
  Choice.findByPk(req.params.id)
    .then((choice) => {
      console.log(choice);
      return res.json({ choice });
    })
    .catch((err) => {
      console.log(err);
      return res.json({ err });
    });
});

router.post("/:id", (req, res) => {
  // mysqlConnection.query(
  //   `insert into choice(choice, question_id) value ('${req.body.choice}',${req.params.id});`,
  //   (err, rows, field) => {
  //     if (err) return res.json({ error: err });

  //     res.send("posted");
  //   }
  // );
  Choice.create({ questionQuestionId: req.params.id, choice: req.body.choice })
    .then((result) => {
      console.log(result);
      return res.json({ result });
    })
    .catch((err) => {
      console.log(err);
      return res.json(err);
    });
});

module.exports = router;
