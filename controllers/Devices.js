var devices = require('../models/devices');
// List of all devices
// List of all devices
exports.devices_list = async function(req, res) {
try{
thedevices = await devices.find();
res.send(thedevices);
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
  thedevices = await devices.find();
  res.render('devices', { title: 'devices Search Results', results: thedevices });
  }
  catch(err){
  res.status(500);
  res.send(`{"error": ${err}}`);
  }
  };

  

// for a specific devices.
exports.devices_detail = function(req, res) {
res.send('NOT IMPLEMENTED: devices detail: ' + req.params.id);
};
// Handle devices create on POST.
exports.devices_create_post =  async function(req, res) {
  console.log(req.body)
  let document = new devices()
  document.name = req.body.name;
  document.No_of_songs = req.body.No_of_songs;
  document.type = req.body.type;
  try {
      let result = await document.save();
      res.send(result);
  }
  catch (err) {
      res.status(500);
      res.send(`{"error": ${err}}`)
  }
};
// Handle devices delete form on DELETE.
exports.devices_delete = function(req, res) {
res.send('NOT IMPLEMENTED: devices delete DELETE ' + req.params.id);
};
// Handle devices update form on PUT.
exports.devices_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: devices update PUT' + req.params.id);
};
