const User = require("../models/user");
const RagPicker = require("../models/ragpicker");
const Organisation = require("../models/organisation");

const auth = async (req, res) => {
    const data = req.body;

    try {
        if (!data) {
        return res.status(400).json({ message: "Please send required data" });
        } else {
            let email = data.userInfo.email;
            const existingUser = await User.findOne({ "UserInfo.email": email });
            const existingRagPicker = await RagPicker.findOne({ "UserInfo.email": email });
            const existingOrganisation = await Organisation.findOne({ "UserInfo.email": email });

            if (existingUser || existingRagPicker || existingOrganisation) {
                console.log("Email already exists in the database.");
                return res.status(409).json({ message: "Email already exists" });
            } else {

                if(data.type == "ragPicker"){
                    const account = new RagPicker({
                        userInfo : data.userInfo,
                        kycData : data.kycData
                    })
                    account.save();
                }
                else if(data.type == "organisation"){
                    const account = new RagPicker({
                        userInfo : data.userInfo,
                        organisationData : data.organisationData
                    })
                    account.save();
                }
                else{
                    const account = new RagPicker({
                        userInfo : data.userInfo
                    })
                    account.save();
                }

                let subject = `Welcome to EcoSathi, ${userInfo.name}!`;

                let html = `
                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                        </head>
                        <body>
                            <h1>Hi ${userInfo.name},</h1>
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
        }
  } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error: could not create account" });
  }
};

module.exports = auth;
