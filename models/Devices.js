const mongoose = require("mongoose")
const DeviceSchema = mongoose.Schema({
name: String,
color: String,
ram: Number
})
module.exports = mongoose.model("Devices",
DeviceSchema)