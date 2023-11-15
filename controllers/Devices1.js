
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