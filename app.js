// import express, morgan, and the buiilt in express method
const express = require("express");
const morgan = require("morgan");
const app = express();

//use morgan as middleware
app.use(morgan("dev"));

// setup simple GET request
app.get("/", (req, res) => {
  res.status(200).send("Hello Express!");
});

app.get("/quotient", (req, res) => {
  const { a, b } = req.query;

  if (!a) {
    return res.status(400).send("Value for a is needed");
  }

  if (!b) {
    return res.status(400).send("Value for b is needed");
  }

  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA)) {
    return res.status(400).send("Value for a must be numeric");
  }

  if (isNaN(numB)) {
    return res.status(400).send("Value for b must be numeric");
  }

  if (numB == 0) {
    return res.status(400).send("Cannot divide by 0");
  }

  const ans = numA / numB;

  res.send(`${a} divided by ${b} is ${ans}`);
});

module.exports = app;
