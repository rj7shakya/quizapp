const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const sequelize = require("./connection");

const Question = require("./models/question");
const Choice = require("./models/choice");

Choice.belongsTo(Question, { constraints: true, onDelete: "CASCADE" });
Question.hasMany(Choice);

app.use(bodyParser.json());
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

// define routes
app.use("/question", require("./routes/question")); //get all, update, delete
app.use("/choice", require("./routes/choice"));

sequelize
  .sync()
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`Server started at ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
