const mongoose = require("mongoose");
const { Schema } = mongoose;
const { DateTime } = require("luxon")

const bookInstanceSchema = new Schema({
    book: {type: Schema.ObjectId, ref: "Book", required: true},
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

bookInstanceSchema.virtual("due_back_formatted").get(function() {
    return DateTime.fromJSDate(this.due_back).toLocaleString(DateTime.DATE_MED);
});

module.exports = mongoose.model("BookInstance", bookInstanceSchema) 