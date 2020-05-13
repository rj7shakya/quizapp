// seqeulize connection

const Seqeulize = require("sequelize");

const sequelize = new Seqeulize("quiz", "root", "inspiron", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
