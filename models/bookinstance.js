const mongoose = require("mongoose");
const Schema = require("Schema");

const bookInstanceSchema = new Schema({
    book: {type: Schema.Types.ObjectId, ref: "book", required: true},
    imprint: {type: String, required: true},
    status: {
        type: String,
        required: true,
        enum: ["Available", "Maintenance", "Loaned", "Reserved"],
        default: "Maintenance",
    },
    due_back: { type: Date, default: Date.now },
});

bookInstanceSchema.virtual("url").get(() => {
    return `/catalog/bookinstance/${this._id}`
})

module.exports = mongoose.model("BookInstance", bookInstanceSchema)