const express = require("express");

const db = require("../dbConfig");

const router = express.Router();

router.get("/", (req, res) => {
  db("accounts")
    .then(account => {
      res.status(200).json(account);
    })
    .catch(error => res.status(500).json({ error: "something went wrong" }));
});

module.exports = router;
