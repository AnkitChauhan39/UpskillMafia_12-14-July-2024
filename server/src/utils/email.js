const nodemailer = require('nodemailer');
const {EMAIL,APP_PASSWD} = require('../../constant');

const transporter = nodemailer.createTransport({
    service : "gmail",
    host : "smtp.gmail.com",
    post : 587,
    secure : false,
    auth : {
        user : EMAIL,
        pass : APP_PASSWD
    }
});

async function sendEmail(email, subject,html){
    try {
        const mailOptions = {
            from : {
                name : "EcoSathi",
                address : process.env.EMAIL
            },
            to : email,
            subject : subject,
            html : html
        }

        const info = await transporter.sendMail(mailOptions)
        console.log("Email sent successfully : ", info.messageId)
    } catch (error) {
        console.error("Error sending email : ",err);
    }
};

module.exports = sendEmail;