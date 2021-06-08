const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const AuthorSchema = new Schema ({
    author : String,
    gener: String,
    image: String,
    image : String
    
});



var Authordata = mongoose.model('authordata', AuthorSchema);



module.exports = Authordata;
