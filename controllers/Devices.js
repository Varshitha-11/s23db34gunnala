var Devices = require("../models/Devices");
// List of all devicesControllers
exports.devicesController_list = async function(req, res) {
    try{
        Devices = await Devices.find();
        res.send(Devices);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
      
};
// for a specific devicesController.
exports.devicesController_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: devicesController detail: ' + req.params.id);
};
// Handle devicesController create on POST.
exports.devicesController_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: devicesController create POST');
};
// Handle devicesController delete form on DELETE.
exports.devicesController_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: devicesController delete DELETE ' + req.params.id);
};
// Handle devicesController update form on PUT.
exports.devicesController_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: devicesController update PUT' + req.params.id);
};