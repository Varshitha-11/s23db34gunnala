const mongoose = require("mongoose")
const DevicesSchema = mongoose.Schema({
name: String,
color: String,
ram : Number
})
module.exports = mongoose.model("Devices",DevicesSchema)