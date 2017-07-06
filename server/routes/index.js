var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/pie', function(req, res, next) {
  //res.render('chart', { title: 'Express' });
  res.sendFile(path.join(__dirname + 'views/chart.html'));
});

/* GET home page. */
router.get('/stock', function(req, res, next) {
  //res.render('chart', { title: 'Express' });
  res.sendFile(path.join(__dirname + 'views/stock.html'));
});

module.exports = router;
