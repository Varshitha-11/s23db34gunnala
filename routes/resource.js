var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Device_controller = require('../controllers/Device');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Devices ROUTES ///
// POST request for creating a Devices.
router.post('/Devices', Device_controller.Device_create_post);
// DELETE request to delete Devices.
router.delete('/Devices/:id', Device_controller.Device_delete);
// PUT request to update Devices.
router.put('/Devices/:id', Device_controller.Device_update_put);
// GET request for one Devices.
router.get('/Devices/:id', Device_controller.Device_detail);
// GET request for list of all Devices items.
router.get('/Devices', Device_controller.Device_list);


module.exports = router;