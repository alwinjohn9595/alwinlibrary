
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    username: {
        type: String,
        
    },

    emailid:{
        type: String,
        unique: true
        
        
    },

    password: {
        type: String,

    }


    
});




var Signupdata = mongoose.model('userdata', userSchema);

module.exports = Signupdata;