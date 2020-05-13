const { Sequelize } = require("sequelize");
const sequelize = require("../connection");

const Choice = sequelize.define("choice", {
  choice_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  choice: Sequelize.STRING,
  is_correct: Sequelize.BOOLEAN,
});

module.exports = Choice;
