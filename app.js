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

module.exports = app;
