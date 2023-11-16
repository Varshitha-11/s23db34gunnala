var express = require('express');
const devices_controlers= require('../controllers/Devices');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Devices', { title: 'Search Results' });

  router.get('/Devices', devices_controlers.Devices_view_all_Page );

  router.get('/Devices/:id',devices_controlers.Devices_detail);

});

// GET request for one Devices.
/* GET detail Devices page */
router.get('/detail', devices_controlers.Devices_view_one_Page);

module.exports = router;
//* GET create Devices page */
router.get('/create', Devices_controlers.Devices_create_Page);
