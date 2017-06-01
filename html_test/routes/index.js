var express = require('express');
var router = express.Router();

//Bring in Model
var Email = require('../models/emails');

/* GET home page. */
router.get('/', function(req, res, next) {
  Email.find({}, function(err, emails){
    if (err) {
      console.log(err);
    } else {
      res.render('index', {
        title: 'Envío de notificaciones EMS',
        emails: emails
      });
    }
  });
});

module.exports = router;
