const mongoose = require('mongoose');

const organisationSchema = new mongoose.Schema({

},
{
    timestamps : true
}); 

const Organisation = mongoose.model("Organisation",organisationSchema);

module.exports = User;