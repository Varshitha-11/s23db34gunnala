var Devices = require("../models/Devices");
// List of all Devices
exports.Devices_list = async function (req, res) {
  try {
    theDevices = await Devices.find();
    res.send(theDevices);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};
// for a specific Devices.
exports.Devices_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: Devices detail: " + req.params.id);
};
// Handle Devices create on POST.
exports.Devices_create_post = async function (req, res) {
  console.log(req.body);
  let document = new Devices();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  // {"costume_type":"goat", "cost":12, "size":"large"}
  document.model = req.body.model;
  document.color = req.body.color;
  document.year = req.body.year;
  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};
// Handle Devices delete form on DELETE.
exports.Devices_delete = function (req, res) {
  res.send("NOT IMPLEMENTED: Devices delete DELETE " + req.params.id);
};
// Handle Devices update form on PUT.
exports.Devices_update_put = function (req, res) {
  res.send("NOT IMPLEMENTED: Devices update PUT" + req.params.id);
};

// VIEWS
// Handle a show all view
exports.Devices_view_all_Page = async function (req, res) {
  try {
    theDevices = await Devices.find();
    console.log(theDevices);
    res.render("Devices", {
      title: "Devices Search Results",
      results: theDevices
    });
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};