var express = require('express');
const devices_controlers= require('../controllers/Devices');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('devices', { title: 'Search Results' });

  router.get('/', devices_controlers.devices_view_all_Page );

});

module.exports = router;
