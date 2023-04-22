const mongoose = require("mongoose");
const Schema = require("Schema");

const authorSchema = new Schema({
    first_name: {type: String, required: true, maxLenght: 100},
    family_name: {type: String, required: true, maxLenght: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
});

authorSchema.virtual("name").get(() => {
    let full_name = ""
    
    if(this.first_name && this.family_name) {
        full_name = `${first_name} ${family_name}`
    }
    else {
        return full_name
    }
});

authorSchema.virtual("url").get(() => {
    return `/catalog/author/${this._id}`;
});

module.exports = mongoose.model("Author", authorSchema);