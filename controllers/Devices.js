var Devices = require('../models/Devices');
// List of all Devices
// List of all Devices
exports.Devices_list = async function(req, res) {
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
exports.Devices_view_all_Page = async function(req, res) {
  try{
  theDevices = await Devices.find();
  res.render('Devices', { title: 'Devices Search Results', results: theDevices });
  }
  catch(err){
  res.status(500);
  res.send(`{"error": ${err}}`);
  }
  };

  

// for a specific Devices.
exports.Devices_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Devices detail: ' + req.params.id);
};
// Handle Devices create on POST.
exports.Devices_create_post =  async function(req, res) {
  console.log(req.body)
  let document = new Devices();
  document.name = req.body.name;
  document.ram = req.body.ram;
  document.color = req.body.color;
  try {
      let result = await document.save();
      res.send(result);
  }
  catch (err) {
      res.status(500);
      res.send(`{"error": ${err}}`)
  }
};
// Handle Devices delete form on DELETE.
exports.Devices_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Devices delete DELETE ' + req.params.id);
};
// Handle Devices update form on PUT.
exports.Devices_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Devices update PUT' + req.params.id);
};
