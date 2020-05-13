const express = require("express");
const router = express.Router();
const Question = require("../models/question");
const Choice = require("../models/choice");

router.get("/", (req, res) => {
  console.log("requesting");
  Question.findAll({
    include: [
      {
        model: Choice,
        // where: {
        //   questionQuestionId: 1,
        // },
      },
    ],
  })
    .then((questions) => {
      return res.json({ questions });
    })
    .catch((err) => {
      return res.json(err);
    });
});

router.post("/", (req, res) => {
  Question.create({ question: req.body.question })
    .then((result) => {
      console.log(result);
      return res.json(result);
    })
    .catch((err) => {
      console.log(err);
      return res.json(err);
    });
});

module.exports = router;
