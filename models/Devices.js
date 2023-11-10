const mongoose = require("mongoose")
const DevicesSchema = mongoose.Schema({
name: String,
type: String,
No_of_songs : Number
})
module.exports = mongoose.model("Devices",DevicesSchema)