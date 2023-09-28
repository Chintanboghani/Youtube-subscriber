const express = require("express");
const app = require("./app.js");
const dotenv = require("dotenv");
dotenv.config();

require("./config/createDatabase.js");

const port = process.env.PORT || 3000;

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log("server is running on Port " + port);
});
