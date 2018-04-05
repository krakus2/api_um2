var express = require('express');
var router = express.Router();

const mapsApi_key = "AIzaSyDl4DVYLh4h_5WdJ46t9_g0zwAqw57TJUU"
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { map: mapsApi_key });
});

module.exports = router;
