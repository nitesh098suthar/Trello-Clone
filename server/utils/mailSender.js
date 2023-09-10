import nodemailer from "nodemailer"

const mailSender = async(email, subject, body) =>{

    const transport = nodemailer.createTransport({
        port : 587,
        host : "smtp.gmail.com",
        auth : {
                user : process.env.SMTP_MAIL,
                pass : process.env.SMTP_PASSWORD
        },
    })

    const emailProcessed = await transport.sendMail({
        from : process.env.SMTP_MAIL,
        to : email,
        subject,
        body
    })

    if(emailProcessed) return true
    else return false

}

export default mailSender;