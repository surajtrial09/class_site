const contactSchema = require("../Models/contactSchema");
const User = require("../Models/userSchema");
const { hashPassword, comparePassword } = require("../utils/bcryptConfig");
const sendMail = require("../utils/sendEmail");
const sendOTP = require("../utils/sendOtp");

module.exports.addUser = async (req, res) => {
  const { password } = req.body;
  try {
    const newUser = await User.create({
      ...req.body,
      password: await hashPassword(password),
    });
    return res
      .status(201)
      .send({ message: `Welcome ${req.body.fullName} !`, newUser });
  } catch (err) {
    console.log(err);
  }
};

module.exports.authUser = async (req, res) => {
  const { userEmail, password } = req.body;
  console.log(userEmail, password, "body");
  try {
    const foundUser = await User.findOne({ userEmail: userEmail });
    // console.log(foundUser,password);

    if (await comparePassword(password, foundUser?.password)) {
      return res
        .status(200)
        .send({ message: `Welcome ${foundUser.fullName} !`, foundUser });
    } else {
      return res.status(401).send({ message: "Invalid email or password!" });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports.addContact = async (req, res) => {
  const { userName, userEmail, userMessage, userNumber } = req.body;
  const newContact = await contactSchema.create(req.body);
  await sendMail(userName, userEmail, userNumber, userMessage);
  return res.status(201).send({ message: "Query Sent!" });
};

module.exports.addEnrollment = async (req, res) => {
  console.log(req.body);
};

module.exports.forgetPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ userEmail: email });
  if (!user) {
    return res.status(401).send({ message: "User With Email Not Found!" });
  } else {
    const otp = Math.floor(100000 + Math.random() * 900000);
    user.otp = otp;
    await sendOTP(email, otp);
    await user.save();
    return res.status(200).send({ success: true, user });
  }
};

module.exports.verifyOTP = async (req, res) => {
  const { email, otp } = req.body;
  const user = await User.findOne({ userEmail: email });
  if (!user) {
    return res.status(401).send({ message: "User With Email Not Found!" });
  } else {
    if (user.otp == otp) {
      return res
        .status(200)
        .send({ message: "OTP Verified ✔", isVerified: true });
    } else {
      return res
        .status(401)
        .send({ message: "Invalid OTP !", isVerified: false });
    }
  }
};

module.exports.resetPassword = async (req, res) => {
  const { email, newpassword } = req.body;
  const foundUser = await User.findOne({ userEmail: email });
  foundUser.password = await hashPassword(newpassword);
  await foundUser.save();
  return res.status(200).send({ message: "Password Changed Successfully!" });
};
