var express = require('express');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

router.get('/', function(req, res) {
  //res.send('ok Roger');
  res.render('index', {
    title: 'my App is here, why cant i push!',
    age: req.query.age
  });
});

module.exports = router;
