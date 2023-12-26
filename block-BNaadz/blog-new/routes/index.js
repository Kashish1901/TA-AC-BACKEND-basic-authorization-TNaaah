var express = require("express");
var router = express.Router();
var User = require("../models/User");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/dashboard", (req, res) => {
  if (req.session && req.session.Userid) {
    res.redirect("/articles");
  } else {
    res.redirect("/users/login");
  }
});
module.exports = router;
