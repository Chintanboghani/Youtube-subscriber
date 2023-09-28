const Subscribers = require("../models/subscribers");

const getAllSubscriber = async (req, res) => {
  try {
    const allSubscribers = await Subscribers.find();
    if (allSubscribers.length > 0) {
      res.status(200).json({ status: "200", data: allSubscribers });
    } else {
      res.status(204).json({
        status: "204",
        message: "data not found!",
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "400",
      message: "ERR :" + err.message,
    });
  }
};

const getSubscriberName = async (req, res) => {
  try {
    const subscriberNamesAndChannels = await Subscribers.find(
      {},
      { _id: 0, name: 1, subscribedChannel: 1 }
    );
    res.status(200).json({ status: "200", data: subscriberNamesAndChannels });
  } catch (err) {
    res.status(400).json({
      status: "404",
      message: "ERR :" + err.message,
    });
  }
};

const getSubscriberById = async (req, res) => {
  try {
    const matchedSubscriber = await Subscribers.findOne({ _id: req.params.id });
    if (matchedSubscriber) {
      res.status(200).json({ status: "200", data: matchedSubscriber });
    } else {
      throw { message: "data not found" };
    }
  } catch (err) {
    res.status(400).json({
      status: "400",
      message: err.message,
    });
  }
};

module.exports = {
  getAllSubscriber,
  getSubscriberName,
  getSubscriberById,
};
