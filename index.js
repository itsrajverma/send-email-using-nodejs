const nodeMailer = require('nodemailer');
const log = console.log;
log('Send Email Using Node js ');

// create transporter object
let transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'from@gmail.com',
        pass: 'yourpassword'
    }
});


//setup email data
var mailOptions = {
    from: 'from@gmail.com',
    to: 'to@gmail.com',
    subject: 'Send Email using Node.js - Web authority',
    text: 'Web Authority - Easy, Appropriate and Unique solution of Programming Blog, Web Development, Tutorials, PHP, MySQL, jQuery, Ajax, CodeIgniter'
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        log(error);
    } else {
        log('Email send successfully....')
    }
});