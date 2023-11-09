var express = require('express');
const devices_controlers= require('../controllers/Devices');
var router = express.Router();
/* GET costumes */
router.get('/', devices_controlers.devices_view_all_Page );
module.exports = router;
