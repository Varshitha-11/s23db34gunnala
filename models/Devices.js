const mongoose = require("mongoose")
const DevicesSchema = mongoose.Schema({
name: {type: String, minlength:1, maxlength:20},
color: {type: String, minlength:1, maxlength:20},
ram : {type: Number, minlength:1, maxlength:20},
})
module.exports = mongoose.model("Devices",DevicesSchema)