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
// VIEWS
// Handle a show all view
exports.devices_view_all_Page = async function(req, res) {
    try{
    theDevicess = await Devices.find();
    res.render('Devicess', { title: 'Devices Search Results', results: theDevicess });
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
// exports.devicesController_create_post = function(req, res) {
//  res.send('NOT IMPLEMENTED: devicesController create POST');
// };
// Handle devicesController delete form on DELETE.
exports.devicesController_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: devicesController delete DELETE ' + req.params.id);
};
// Handle devicesController update form on PUT.
exports.devicesController_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: devicesController update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
// exports.devices_view_all_Page = async function(req, res) {
//     try{
//     Devices = await Devices.find();
//     res.render('Devices', { title: 'Devices Search Results', results: Devices });
//     }
//     catch(err){
//     res.status(500);
//     res.send(`{"error": ${err}}`);
//     }
//    };
exports.devicesController_create_post = async function (req, res) {
    console.log(req.body);
    let document = new Devices();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.color = req.body.color;
    document.ram = req.body.ram;
    try {
      let result = await document.save();
      res.send(result);
    } catch (err) {
      res.status(500);
      res.send(`{"error": ${err}}`);
    }
  };