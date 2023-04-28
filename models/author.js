const mongoose = require("mongoose");
const { Schema } = mongoose;
const { DateTime } = require("luxon")

const authorSchema = new Schema({
    first_name: {type: String, required: true, maxLenght: 100},
    family_name: {type: String, required: true, maxLenght: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
});

authorSchema.virtual("name").get(function () {
    let full_name = ""
    
    if(this.first_name && this.family_name) {
        full_name = `${this.family_name}, ${this.first_name}`
    }
    if(!this.first_name || !this.family_name) {
        full_name = ""
    }
    return full_name
});

authorSchema.virtual("url").get(function() {
    return `/catalog/author/${this._id}`
});

authorSchema.virtual("lifespan").get(function() {
    return `${this.date_of_birth ? DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED) : ""} - ${this.date_of_death ? DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED) : ""}`
})

authorSchema.virtual("date_of_birth_formatted").get(function() {
    return this.date_of_birth ? DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED) : ""
})
authorSchema.virtual("date_of_death_formatted").get(function() {
    return this.date_of_death ? DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED) : ""
})

module.exports = mongoose.model("Author", authorSchema); 