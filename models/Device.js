var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Devices', { title: 'Search Results - Devices' });
});

module.exports = router;


const mongoose = require("mongoose")
const DeviceSchema = mongoose.Schema({
name: String,
color: String,
ram: Number
})
module.exports = mongoose.model("Device",DeviceSchema)