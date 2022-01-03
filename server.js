const express = require("express");

const app = express();

app.use(express.json());

// include database config file
const db = require("./app/config/db.config");

// force: true will drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync with { force: true }");
});

// include application routes
require("./app/route/book.route")(app);

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port port 🔥`);
