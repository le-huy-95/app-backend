import nodemailer from "nodemailer"
require("dotenv").config();


const SendEmail = async (emailReceiveOtp, pin) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.MAIL, // generated ethereal user
            pass: process.env.PASS // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Hệ thống" lexuanhuy8695@gmail.com', // sender address
        to: emailReceiveOtp,// list of receivers
        subject: "HUY LE APP", // Subject line
        text: "yêu cầu lấy lại mật khẩu", // plain text body
        html: `
        <h3>xin chào ${emailReceiveOtp}!</h3> 
        <p>Mã Otp là  <b>${pin}</b></p>
       <div>
     
     <div> Để bảo vệ tài khoản của bạn vui lòng không chia sẻ mã Otp cho người khác <div/>

        <div> Xin chân thành cảm ơn <div/>
        `, // html body
    });


}



module.exports = {
    SendEmail
}