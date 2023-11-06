const mongooose = require("mongoose")

const userSchema = new mongooose.Schema({
    username: String,
    email : String,
    password : String
})

const userModel = mongooose.model("user", userSchema)
module.exports = userModel