const express = require("express");
const app = require("./app.js");
const swaggerDocument = require('../swagger.json');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const customCss = fs.readFileSync((process.cwd()+"/swagger.css"), 'utf8');
const dotenv = require("dotenv");
dotenv.config();

require("./config/createDatabase.js");

const port = process.env.PORT || 3000;

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {customCss}));

app.listen(port, () => {
  console.log("server is running on Port " + port);
});
