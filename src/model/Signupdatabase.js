
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    username: {
        type: String,
        
    },

    emailid:{
        type: String,
        
        
    },

    password: {
        type: String,

    }


    
});




var Signupdata = mongoose.model('userdata', userSchema);

module.exports = Signupdata;