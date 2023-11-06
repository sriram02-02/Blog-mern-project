const mongooose = require("mongoose")

const postSchema = new mongooose.Schema({
    username: String,
    title: String,
    photo : String,
    head : String,
    paragraph : String,
})

const postModel = mongooose.model("post", postSchema)
module.exports = postModel