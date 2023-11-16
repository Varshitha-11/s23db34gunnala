var express = require('express');
const devices_controlers= require('../controllers/Devices');
var router = express.Router();



// GET Instruments
router.get('/', devices_controlers.Devices_view_all_Page );
 //GET request for one instrument.
router.get('/Devices/:id', devices_controlers.Devices_detail)
/* GET detail Devicespage */
router.get('/detail', devices_controlers.Devices_view_one_Page);
/* GET create Devicespage */
router.get('/create', devices_controlers.Devices_create_Page);
/* GET create update page */
router.get('/update', devices_controlers.Devices_update_Page);
/* GET delete Devicespage */
router.get('/delete', devices_controlers.Devices_delete_Page);

module.exports = router;