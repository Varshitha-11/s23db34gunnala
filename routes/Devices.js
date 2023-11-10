var express = require('express');
const devices_controlers= require('../controllers/Devices');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Devices', { title: 'Search Results' });

  router.get('/Devices', devices_controlers.Devices_view_all_Page );

  router.get('/Devices/:id',devices_controlers.Devices_detail);

});

// GET request for one costume.


module.exports = router;
