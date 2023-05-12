require('dotenv').config();
const nodemailer = require('nodemailer');
const url = "http://localhost:3001/verify/account/"

module.exports = {
    validateAccount : (body)=>{
        // === TRANSPORTER DETAILS ===
        const authEmail = process.env.NODE_MAILER_MAIL;
        const authPass = process.env.NODE_MAILER_PASS;
        
        let transporter = nodemailer.createTransport({
            host: 'smtp.office365.com', // Office 365 server
            port: 587,     // secure SMTP
            secure: false,
            auth: {
                user: authEmail,
                pass: authPass
            },
            tls: {
                rejectUnauthorized: false
            }
            });
    
        let mailOptions = {
            from: `${process.env.NODE_MAILER_MAIL} <${process.env.NODE_MAILER_MAIL}>`,
            to: body.mail,
            subject: `Account Validation`,
            html:`<h3> Dear ${body.firstname} ${body.lastname}, thank you for creating an account.</h3><br>
            <p>To verify your account, please follow this link: <a href="${url + body.uuid}">${url + body.uuid}</a></p>

            Sincerely
            The Event Planner Team
            `,
        };
    
        try {
                // === SEND REQUEST ===
                transporter.sendMail(mailOptions, function (err, res) {
                    if(err){
                        success = false;
                        errorMsg = "OOPS SOMETHING WENT WRONG IN validateAccount " + err 
                    }
                })
                return {
                    object : {},
                    success : true,
                    msg : '',
                    status : 200
                }        
        } catch (err) {
            // === RETURN ERROR ===
            return {
                object : {},
                success: false,
                msg     : "OOPS, something went wrong in validateAccount" + err,
                status  : 403
            }
        }
    }
}