var express = require('express');
const Device_controlers= require('../controllers/Device');
var router = express.Router();
// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }
// GET Devices
router.get('/', Device_controlers.Device_view_all_Page );
 //GET request for one Devices.
router.get('/Devices/:id', Device_controlers.Device_detail)
/* GET detail Devicespage */
router.get('/detail', Device_controlers.Device_view_one_Page);
/* GET create Devicespage */
router.get('/create', Device_controlers.Device_create_Page);
/* GET create update page */
router.get('/update', Device_controlers.Device_update_Page);
/* GET delete Devicespage */
router.get('/delete', Device_controlers.Device_delete_Page);

module.exports = router;