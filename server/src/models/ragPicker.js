const mongoose = require('mongoose');

const ragPickerSchema = new mongoose.Schema({
    userInfo : {
        type : Object,
        required : true,
    },
    earnings : {
        type : [{
            amount : Number,
            from : String,
            time : Date,
        }],
        required : false,
        default : [],
    },
    kycData : {
        type : Object,
        required : true,
    },
    organisations : {
        type : [{
            name  : String,
            phoneNo : String,
            address : String,
        }],
        required : true,
        default : [],
    },
    notifications : {
        type : [{
            from : String,
            address : String,
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

const RagPicker = mongoose.model("RagPicker",ragPickerSchema);

module.exports = RagPicker;