const mongoose = require('mongoose');

const organisationSchema = new mongoose.Schema({
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
    organisationData : {
        type : Object,
        required : true,
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
    },
    ragPickers : {
        type : [{
            name : String,
            phoneNo : String,
            address : String,
        }],
        required : false,
        default : [],
    }
},
{
    timestamps : true
}); 

const Organisation = mongoose.model("Organisation",organisationSchema);

module.exports = Organisation;