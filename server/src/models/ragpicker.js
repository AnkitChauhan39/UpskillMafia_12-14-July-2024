const mongoose = require('mongoose');

const ragPickerSchema = new mongoose.Schema({

},
{
    timestamps : true
}); 

const RagPicker = mongoose.model("RagPicker",ragPickerSchema);

module.exports = RagPicker;