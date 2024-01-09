var express = require("express");
var router = express.Router();
var User = require("../models/User");
var auth = require("../middlewares/auth");
/* GET home page. */

router.get("/", function (req, res, next) {
  console.log(req.user);
  res.render("index", { title: "Express" });
});

router.get("/dashboard", auth.loggedInUser, (req, res) => {
  res.render("dashboard.ejs");
});

module.exports = router;
