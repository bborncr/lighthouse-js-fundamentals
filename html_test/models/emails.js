var mongoose = require('mongoose');

var emailsSchema = mongoose.Schema({
    order_number: {
      type: String,
      required: true
    },
    tracking_number: {
      type: String,
      required: true
    },
    client_email: {
      type: String,
      required: true
    }
});

var Email = module.exports = mongoose.model('Email', emailsSchema);