var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Devices', { title: 'Search Results - Devices' });
});

module.exports = router;


const mongoose = require("mongoose")
const DeviceSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // Example validation: Check if the manufacturer contains only alphabetical characters
        return /^[a-zA-Z]+$/.test(value);
      },
    },
  },
  ram: {
    type: Number,
    required: true,
    min: [0, 'Price must be at least 0'],   // Minimum value for the price
    max: [300, 'Price must be at most 100'], // Maximum value for the price
  },
});
module.exports = mongoose.model("Device",DeviceSchema)