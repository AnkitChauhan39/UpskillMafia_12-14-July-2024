const ContactUs = require("../models/contactus")
const sendEmail = require('../utils/email')

const contactUs = async (req,res) => {
    const { name, email , phoneNo, message} = req.body

    try {

        if (!name || !email || !phoneNo || !message) {
            return res.status(400).json({ message: 'Please fill in all required fields' })
        }

        const newContact = new ContactUs({ name , email, phoneNo, message })
        await newContact.save()

        const subject = "Thanks for reaching out! We'll be in touch soon."
        const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Thanks for Contacting Us!</title>
        </head>
        <body>
          <p>Dear ${name},</p>
          <p>Thank you for contacting <a href="https://ecosathi.vercel.app/">EcoSathi</a>! We appreciate you reaching out to us.</p>
          <p>We've received your message and our team is working on a response. You can expect to hear back from us within 24 hours.</p>
          <p>In the meantime, you can explore our website for answers to frequently asked questions: <a href="https://ecosathi.vercel.app/">FAQ</a>.</p>
          <p>We look forward to assisting you further!</p>
          <p>Sincerely,</p>
          <p>The EcoSathi Team</p>
        </body>
        </html>
        `

        sendEmail(email, subject, html)

        res.status(201);
    } catch (err) {
        console.error(err)
        res.status(500);
    }
};

module.exports = contactUs