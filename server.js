const express = require("express");

const accountRouter = require("./data/accounts/accounts-router");

const server = express();

server.use(express.json());

server.use("/api/accounts", accountRouter);

server.get("/", (req, res) => {
  res.send("<h1>Base url working</h1>");
});

module.exports = server;
