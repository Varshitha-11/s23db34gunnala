var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Devices_controller = require('../controllers/Devices');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Devices ROUTES ///
// POST request for creating a Devices.
router.post('/devices', Devices_controller.devicesController_create_post);
// DELETE request to delete Devices.
router.delete('/devices/:id', Devices_controller.devicesController_delete);
// PUT request to update Devices.
router.put('/devices/:id', Devices_controller.devicesController_update_put);
// GET request for one Devices.
router.get('/devices/:id', Devices_controller.devicesController_detail);
// GET request for list of all Devices items.
router.get('/devices', Devices_controller.devicesController_list);
module.exports = router;