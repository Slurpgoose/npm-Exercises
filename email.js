const nodemailer = require("nodemailer");


async function setupAccount() {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass // generated ethereal password
        }
      });

    return transporter
};

async function sendEmail(header="test", message="test-message") {
    transporter =  await setupAccount();
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: `${header} ✔`, // Subject line
        text: message, // plain text body
        html: `<b>${message}</b>` // html body
      });
    
    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

}

sendEmail('Stop writting code', 'you write bad code').catch(console.error);