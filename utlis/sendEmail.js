const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const Token = require("../models/tokenModel");

module.exports = async (user, mailType, admin) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const encryptedToken = bcrypt
      .hashSync(user._id.toString(), 10)
      .replaceAll("/", "");
    const token = new Token({
      userid: user._id,
      token: encryptedToken,
    });
    await token.save();
    let mailOptions, emailContent;
    if (mailType === "verifyemail") {
      emailContent = `<div><h1>Please click on the below link to verify your email address</h1> <a href="http://localhost:3000/verifyemail/${encryptedToken}">${encryptedToken}</a>  </div>`;

      mailOptions = {
        from: "shangeeth24@gmail.com",
        to: user.email,
        subject: "Verify Email For MERN Auth",
        html: emailContent,
      };
    } else if (mailType === "afterverify") {
      emailContent = `<div><h1>Hello ${user.name}</h1>
      <p> Welcome to our Online Motorcycle Booking APPLICATION
      </p>
      </div>`;

      mailOptions = {
        from: "shangeeth24@gmail.com",
        to: user.email,
        subject: "Welcome to our Service",
        html: emailContent,
      };
    } else if (mailType === "afterreset") {
      emailContent = `<div>
        <h1>Hello ${user.name}</h1>
         <p> Password Reset successfull</p>
          <p> If it's not you , Contact Admin</p>
          <p> Admin Details </p>
          <p>Name : ${admin.name} </p>
          <p>E-mail ${admin.email} </p>
        </div>`;

      mailOptions = {
        from: "shangeeth24@gmail.com",
        to: user.email,
        subject: "Password Reset Successfull",
        html: emailContent,
      };
    } else {
      emailContent = `<div><h1>Please click on the below link to reset your password</h1> <a href="http://localhost:3000/resetpassword/${encryptedToken}">${encryptedToken}</a>  </div>`;

      mailOptions = {
        from: "shangeeth24@gmail.com",
        to: user.email,
        subject: "Reset Password",
        html: emailContent,
      };
    }

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};
