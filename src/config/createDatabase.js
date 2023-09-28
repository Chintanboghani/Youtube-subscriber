const mongoose = require("mongoose");
const subscriberModel = require("../models/subscribers");
const data = require("../data/data");

// Connect to DATABASE
const DATABASE = process.env.DATABASE_URL;

mongoose
  .connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongdb is connected.");

    const refreshAll = async () => {
      await subscriberModel.deleteMany({});
      await subscriberModel.insertMany(data);

      console.log("Subscribers database created successfully!");
    };

    refreshAll();
  })
  .catch((err) => console.log(err));
