const mysql = require("mysql2");

const env = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employee",
  multipleStatements: true,
});

module.exports = env;
