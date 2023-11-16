var Devices = require('../models/Devices');

// List of all Devicess
exports.Devices_list = async function (req, res) {
  try {
    const theDevices = await Devices.find();
    res.send(theDevices);
  } catch (err) {
    res.status(500);
    res.send(`{"error": "${err}"}`);
  }
};

// Detail for a specific Devices.
exports.Devices_detail = async function (req, res) {
  console.log("detail" + req.params.id);
  try {
    const result = await Devices.findById(req.params.id);
    res.send(result);
  } catch (error) {
    res.status(500);
    res.send(`{"error": "Document for id ${req.params.id} not found"}`);
  }
};

// VIEWS
// Handle a show all view
exports.Devices_view_all_Page = async function (req, res) {
  try {
    const theDevices = await Devices.find();
    res.render('Devices', { title: 'Devices Search Results', results: theDevices });
  } catch (err) {
    res.status(500);
    res.send(`{"error": "${err}"}`);
  }
};

// Handle Devices create on POST.
exports.Devices_create_post = async function (req, res) {
  console.log(req.body);
  let document = new Devices();
  document.name = req.body.name;
  document.ram = req.body.ram;
  document.color = req.body.color;

  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": "${err}"}`);
  }
};


  // Handle Devices delete on DELETE.
  exports.Devices_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Devices.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };

// Handle Devices update form on PUT.
exports.Devices_update_put = async function(req, res) {
  console.log(`update on id ${req.params.id} with body
  ${JSON.stringify(req.body)}`)
  try {
  let toUpdate = await Devices.findById( req.params.id)
  // Do updates of properties
  if(req.body.name)
  toUpdate.name = req.body.name;
  if(req.body.color) toUpdate.color= req.body.color;
  if(req.body.ram) toUpdate.ram = req.body.ram;
  let result = await toUpdate.save();
  console.log("Sucess " + result)
  res.send(result)
  } catch (err) {
  res.status(500)
  res.send(`{"error": ${err}: Update for id ${req.params.id}
  failed`);
  }
  };
// Handle a show one view with id specified by query
exports.Devices_view_one_Page = async function(req, res) {
  console.log("single view for id " + req.query.id)
  try{
  result = await Devices.findById( req.query.id)
  res.render('Devicesdetail',
 { title: 'Devices Detail', toShow: result });
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
 };
 // Handle building the view for creating a Devices.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Devices_create_Page = function(req, res) {
  console.log("create view")
  try{
  res.render('Devicescreate', { title: 'Devices Create'});
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
 };
