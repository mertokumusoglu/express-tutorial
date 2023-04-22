const mongoose = require("mongoose");
const Schema = require("Schema");

const genreSchema = new Schema({
    name: {type: String, required: true, minLenght:3, maxLenght:100}
})

genreSchema.virtual("url").get(() => {
    return `/catalog/genre/${this._id}`
})