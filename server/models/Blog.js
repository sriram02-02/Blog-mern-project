const mongooose = require("mongoose")

const BlogSchema = new mongooose.Schema({
    name: String,
    email : String,
    password : String
})

const BlogModel = mongooose.model("blog", BlogSchema)
module.exports = BlogModel