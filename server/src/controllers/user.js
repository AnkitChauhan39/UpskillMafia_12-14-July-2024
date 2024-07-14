const User = require('../models/user');
const RagPicker = require('../models/ragPicker');

const getUserData = async (req,res) => {
    const user = req.body.user;

    try {
        const userData = await User.findOne({"userInfo.email": user});
        res.send({userData});
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};

const inviteRagPicker = async (req,res) => {
    const user = req.body.user;
    const ragPicker = req.body.ragPicker;
    const address = req.body.address;
    const amount = req.body.amount;
    const status = false;
    const time = Date.now();

    try {
        const userData = await User.findOne({"userInfo.email": user});
        const ragPickerData = await RagPicker.findOneAndUpdate({_id : ragPicker});

        userData.currentRagPicker.push({
            ragPicker : ragPickerData.userInfo.name,
            address,
            amount,
            status,
            time,
        });
        user.save();

        ragPickerData.notifications.push({
            from : userData.userInfo.name,
            address,
            status,
            time,
        });      
        ragPickerData.save();

        res.send({message : "Notification send successfully!"});
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};

module.exports = {inviteRagPicker, getUserData};