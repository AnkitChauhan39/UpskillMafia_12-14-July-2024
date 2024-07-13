const User = require("../models/user");
const RagPicker = require("../models/ragpicker");
const Organisation = require("../models/organisation");
const sendEmail = require('../utils/email');

const getAccountType = async (req, res) => {
    const email = req.body.email;

    try {
        if(await RagPicker.findOne({ "userInfo.email": email })){
            return res.send({type : "ragPicker"});
        }else if(await Organisation.findOne({ "userInfo.email": email })){
            return res.send({type : "organisation"});
        }else if(await User.findOne({ "userInfo.email": email })){
            return res.send({type : "user"});
        }else{
            return res.send({type : "none"});
        }

    } catch (error) {
        console.log(error);
    }
};

const auth = async (req, res) => {
    const data = req.body;
    console.log(data.userInfo);

    try {
        if (!data) {
        return res.status(400).json({ message: "Please send required data" });
        } else {
            let email = data.userInfo.email;

            if(data.kycData){
                
                const existingRagPicker = await RagPicker.findOne({ "userInfo.email": email });
                if(existingRagPicker){
                    console.log("Email already exists in the database.");
                    return res.status(409).json({ message: "Email already exists" });
                }

                const account = new RagPicker({
                    userInfo : data.userInfo,
                    kycData : data.kycData
                })
                account.save();
            }
            else if(data.organisationData){

                const existingOrganisation = await Organisation.findOne({ "userInfo.email": email });
                if(existingOrganisation){
                    console.log("Email already exists in the database.");
                    return res.status(409).json({ message: "Email already exists" });
                }

                const account = new Organisation({
                    userInfo : data.userInfo,
                    organisationData : data.organisationData
                })
                account.save();
            }
            else{
                
                const existingUser = await User.findOne({ "userInfo.email": email });
                if(existingUser){
                    console.log("Email already exists in the database.");
                    return res.status(409).json({ message: "Email already exists" });
                }

                const account = new User({
                    userInfo : data.userInfo
                })
                account.save();
            }

            let subject = `Welcome to EcoSathi, ${data.userInfo.name}!`;

            let html = `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                    </head>
                    <body>
                        <h1>Hi ${data.userInfo.name},</h1>
                        <p>We're thrilled to welcome you to the EcoSathi community!</p>
                        <h2>Getting Started</h2>
                        <p>If you have any questions or need help navigating the website, please don't hesitate to contact our friendly support team at <a href="https://ecosathi.vercel.app/">EcoSathi</a>.</p>
                        <p>Welcome aboard! We're excited to have you as part of the community.</p>
                        <p>Best regards,</p>
                        <p>The Echo Team</p>
                    </body>
                    </html>
                    `;

            await sendEmail(email, subject, html);

            console.log("Account created successfully!");
            res.status(201).json({ message: "Account created successfully!" });
            
        }
  } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error: could not create account" });
  }
};

module.exports = {auth, getAccountType};
