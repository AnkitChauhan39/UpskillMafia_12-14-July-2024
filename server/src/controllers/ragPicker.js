const User = require('../models/user');
const RagPicker = require('../models/ragPicker');

const getRagPickerData = async (req,res) => {
    const ragPicker = req.body.ragPicker;

    try {
        const ragPickerData = await RagPicker.findOneAndUpdate({"userIndo.email" : ragPicker});
        res.send({ragPickerData});
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};

const acceptInvite = async (req,res) => {
    const user = req.body.user;
    const ragPicker = req.body.ragPicker;

    try {
        const userData = await User.findOne({_id : user});
        const ragPickerData = await RagPicker.findOneAndUpdate({"userInfo.email": ragPicker});

        userData.currentRagPicker.status = true;
        user.save();

        ragPickerData.notifications.status = true;    
        ragPickerData.save();

        res.send({message : "Invitaion accepted!"});
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};

module.exports = {acceptInvite, getRagPickerData};