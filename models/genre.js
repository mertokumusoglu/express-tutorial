const mongoose = require("mongoose");
const { Schema } = mongoose;

const genreSchema = new Schema({
    name: {type: String, required: true, minLenght:3, maxLenght:100}
})

genreSchema.virtual("url").get(function() {
    return `/catalog/genre/${this._id}`
})

module.exports = mongoose.model("Genre", genreSchema)