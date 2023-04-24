var express = require("express");
var router = express.Router();

/* GET users listing. */

router.get("/", function (req, res, next) {
  res.send("user main page");
});

router.get("/cool", (req, res) => {
  res.send("you're so cool")
})

module.exports = router;
