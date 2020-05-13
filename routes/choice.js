const express = require("express");
const router = express.Router();
const Choice = require("../models/choice");

//get choices of given id
router.get("/:id", (req, res) => {
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

//post choices for given id
router.post("/:id", (req, res) => {
  Choice.create({
    is_correct: req.body.is_correct,
    questionQuestionId: req.params.id,
    choice: req.body.choice,
  })
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
