var express = require('express');
var router = express.Router();

//Bring in Model
var Email = require('../models/emails');

/* GET users listing. */
router.get('/delete/:id', function(req, res, next) {
  var query = {_id:req.params.id};
  Email.remove(query, function(err){
    if(err){
      console.log(err);
      return
    } else {
      res.redirect('/');
    }
  });

});
/* Register POST */
router.post('/register', function(req, res, next) {
  console.log(req.body);
  // Add data to DB
  let email = new Email();
  email.order_number = req.body.order_number;
  email.tracking_number = req.body.tracking_number;
  email.client_email = req.body.client_email;
  email.save(function(err){
    if(err){
      console.log(err);
      return;
    } else {
      res.redirect('/');
    }
  });

});
/* Send Emails */
router.post('/send-batch', function(req, res, next) {
  console.log('Sending Emails');
  // Check DB for unsent emails and send them
  res.redirect('/');
});


module.exports = router;
