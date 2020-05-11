const express = require("express");
const router = express.Router();
const mysqlConnection = require("../connection");

router.get("/", (req, res) => {
  console.log("requesting");
  let questions = [];
  mysqlConnection.query(
    "SELECT question.question_id,question.question,choice.choice,choice.is_correct FROM question INNER JOIN choice ON question.question_id=choice.question_id order by question.question_id",
    (err, rows, field) => {
      if (err) return res.json({ error: err });
      // let datas = "";
      // let data = "";
      var choiceArr = [];

      rows.map((row) => {
        // datas = datas + "," + row.choice;

        // if (questions[row.question_id] !== undefined) {
        //   data = questions[row.question_id].choice;
        // }
        if (row.choice !== undefined) {
          choiceArr[row.question_id - 1] += "," + row.choice;
        }
        let indx = row.question_id;
        questions[row.question_id] = {
          ...row,
          // choices: [...choiceArr].slice(),
          choices: choiceArr.filter(function (value, index) {
            console.log(row.question_id);
            return index === row.question_id;
          }),
        };
        console.log("data", row.question_id);
        // console.log(choiceArr[3]);
      });
      console.log("next");
      res.json({ questions });
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
