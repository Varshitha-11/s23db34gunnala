var express = require('express');
var router = express.Router();
const Devices_controlers= require('../controllers/Devices1');


router.get('/detail', Devices_controlers.Devices_view_one_Page);
// /* GET create Devices page */
// router.get('/create', Devices_controlers.Devices_create_Page);
// /* GET create update page */
// router.get('/update', Devices_controlers.Devices_update_Page);
 
module.exports = router;