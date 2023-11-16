var Devices = require('../models/Devices');
// List of all Costumes
exports.Devices_list = async function (req, res) {
    try {
        Devices = await Devices.find();
        res.send(Devices);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// VIEWS
// Handle a show all view
exports.Devices_view_all_Page = async function (req, res) {
    try {
        theDevices = await Devices.find();
        res.render('Devices', { title: 'Devices Search Results', results: theDevices });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}

// for a specific Costume.
exports.Devices_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        let result = await Instrument.findById(req.params.id);

        if (!result) {
            res.status(404).send(`{"error": document for id ${req.params.id} not found`);
        } else {
            res.send(result);
        }
    } catch (error) {
        res.status(500).send(`{"error": ${error.message}`);
    }
};
// Handle Devices create on POST.
exports.Devices_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Devices();
    document.Devices_name = req.body.name;
    document.ram = req.body.ram;
    document.color = req.body.color;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Devices delete form on DELETE.
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
    // Handle building the view for creating a costume.
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
// Handle building the view for updating a instrument.
// query provides the id
exports.Devices_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Devices.findById(req.query.id)
    res.render('Devicesupdate', { title: 'Devices Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };   
// Handle Devices update form on PUT.
exports.Devices_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Devices.findById(req.params.id)
        // Do updates of properties
        if (req.body.name)
            toUpdate.name = req.body.name;
        if (req.body.ram)
            toUpdate.ram = req.body.ram;
        if (req.body.color)
            toUpdate.color = req.body.color;
        let result = await toUpdate.save();
        console.log("Success " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}failed`);
    }
};
//Handle a delete one view with id from query
exports.Devices_delete_Page = async function(req, res) {
console.log("Delete view for id " + req.query.id)
try{
result = await Devices.findById(req.query.id)
res.render('Devicesdelete', { title: 'Devices Delete', toShow:
result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

