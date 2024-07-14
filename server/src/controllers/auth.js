const User = require("../models/user");
const RagPicker = require("../models/ragPicker");
const Organisation = require("../models/organisation");
const sendEmail = require('../utils/email');
const OTPGenerator = require('../controllers/OTPGenerator')

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

const verifyOTP = async (req,res) => {
    const email = req.body.email;

    try {
        const OTP = OTPGenerator();
        const subject = "Verifcation OTP";
        const html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>KYC OTP Verification</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 0;
                        color: #333333;
                    }
                    .container {
                        width: 100%;
                        max-width: 600px;
                        margin: 0 auto;
                        background-color: #ffffff;
                        padding: 20px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    .header {
                        text-align: center;
                        padding: 20px 0;
                        border-bottom: 1px solid #dddddd;
                    }
                    .header img {
                        max-width: 150px;
                    }
                    .content {
                        padding: 20px;
                        text-align: center;
                    }
                    .otp-code {
                        font-size: 24px;
                        font-weight: bold;
                        color: #4CAF50;
                    }
                    .footer {
                        text-align: center;
                        padding: 20px 0;
                        border-top: 1px solid #dddddd;
                        font-size: 12px;
                        color: #888888;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <img src="https://res.cloudinary.com/dusyzh36q/image/upload/v1720940573/EcoSathi_2_y2nypa.jpg" alt="Company Logo">
                    </div>
                    <div class="content">
                        <h1>KYC OTP Verification</h1>
                        <p>Dear User,</p>
                        <p>Thank you for initiating the KYC process. Please use the following OTP to complete your verification:</p>
                        <p class="otp-code">${OTP}</p>
                        <p>This OTP is valid for 10 minutes. Please do not share this code with anyone.</p>
                        <p>If you did not request this OTP, please contact our support team immediately.</p>
                    </div>
                    <div class="footer">
                        <p>&copy; 2024 EcoSathi. All rights reserved.</p>
                    </div>
                </div>
            </body>
            </html>

        `
        
        sendEmail(email, subject, html);
        res.send({OTP});
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};

module.exports = {auth, getAccountType,verifyOTP};
