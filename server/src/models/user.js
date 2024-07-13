const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userInfo : {
        type : Object,
        required : true,
    },
    earnings : {
        type : [{
            amount : Number,
            time : Date,
        }],
        required : false,
        default : [],
    },
    currentRagPicker : {
        type : [{
            ragPicker : String,
            address : String,
            amount : Number,
            status : Boolean,
            time : Date,
        }],
        required : false,
        default : [],
    },
    history : {
        type : [{
            ragPicker : String,
            address : String,
            amount : Number,
            status : Boolean,
            time : Date,
        }],
        required : false,
        default : [],
    }
},
{
    timestamps : true
}); 

const User = mongoose.model("User",userSchema);

module.exports = User;