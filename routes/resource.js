var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Devices ROUTES ///
// POST request for creating a Devices.
router.post('/devices', devices_controller.devicesController_create_post);
// DELETE request to delete Devices.
router.delete('/devices/:id', devices_controller.devicesController_delete);
// PUT request to update Devices.
router.put('/devices/:id', devices_controller.devicesController_update_put);
// GET request for one Devices.
router.get('/devices/:id', devices_controller.devicesController_detail);
// GET request for list of all Devices items.
router.get('/devices', devices_controller.devicesController_list);
module.exports = router;

exports.api = function(req, res) {
    res.write('[');
    res.write('{"resource":"devices", ');
    res.write(' "verbs":["GET","PUT", "DELETE"] ');
    res.write('}');
    res.write(']')
    res.send();
    };