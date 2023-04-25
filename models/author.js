const mongoose = require("mongoose");
const { Schema } = mongoose;

const authorSchema = new Schema({
    first_name: {type: String, required: true, maxLenght: 100},
    family_name: {type: String, required: true, maxLenght: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
});

authorSchema.virtual("name").get(function () {
    let full_name = ""
    
    if(this.first_name && this.family_name) {
        full_name = `${this.first_name} ${this.family_name}`
    }
    if(!this.first_name || !this.family_name) {
        full_name = ""
    }
    return full_name
});

authorSchema.virtual("url").get(() => {
    return `/catalog/author/${this._id}`;
});

module.exports = mongoose.model("Author", authorSchema); 