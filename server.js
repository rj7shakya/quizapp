const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("helloworld");
});

const PORT = process.env.PORT || 5000;

// define routes
app.use("/question", require("./routes/question")); //get all, update, delete
app.use("/choice", require("./routes/choice"));

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
