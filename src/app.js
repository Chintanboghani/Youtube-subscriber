const express = require("express");
const app = express();

const {
  getAllSubscriber,
  getSubscriberName,
  getSubscriberById,
} = require("./controllers/subscriberas");

// METHODS / APIs :-

// 1. GET https://localhost:4000/subscribers  for array of subscribers(an Object)
app.get("/subscribers", getAllSubscriber);

// 2. GET https://localhost:4000/subscribers/names for array of subscribers (Object with only names and Subscribed Channel)
app.get("/subscribers/names", getSubscriberName);

// 3. GET https://localhost:4000/subscribers/:id for subscriber with given id(an Object) AND for not found -- staus:400 and error message: {message:error.message}
app.get("/subscribers/:id", getSubscriberById);

module.exports = app;
