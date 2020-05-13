const { Sequelize } = require("sequelize");
const sequelize = require("../connection");

const Question = sequelize.define("question", {
  question_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  question: Sequelize.STRING,
});

module.exports = Question;
