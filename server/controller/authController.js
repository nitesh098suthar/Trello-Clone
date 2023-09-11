import Router from "../routes/authRouter.js";
import { sendToken } from "../utils/sendToken.js";
import AuthModel from "../Model/AuthModel.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import bcrypt from "bcryptjs";
import mailSender from "../utils/mailSender.js";
import crypto from "crypto";

export const regController = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  const isUser = await AuthModel.findOne({ email });
  if (isUser) return next(new ErrorHandler(401, "User already available"));

  const newUser = await AuthModel.create({ name, email, password });

  return sendToken(newUser, 201, "User register successfully", res);
});

export const loginController = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  const isAvailable = await AuthModel.findOne({ email }).select("+password");

  if (!isAvailable) return next(new ErrorHandler(401, "Please register first"));

  const isLegit = await isAvailable.comparePassword(password);

  if (!isLegit)
    return next(new ErrorHandler(401, "Please enter correct password"));

  return sendToken(isAvailable, 200, "Login Successfully", res);
});

export const logoutController = catchAsyncError(async (req, res, next) => {
  const tokenOption = {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    domain: '.trello-clone-d83k.vercel.app'
  };

  return res.status(200).cookie("token", null, tokenOption).json({
    success: true,
    message: "Logout successfully",
  });
});

export const changeController = catchAsyncError(async (req, res, next) => {
  
  const userId = req.id;
  const { currentPassword, newPassword } = req.body;
  if (!userId) return next(new ErrorHandler(401, "Unauthrized user"));

  const isUser = await AuthModel.findById(userId).select("+password");

  if (!isUser) return next(new ErrorHandler(401, "Unauthrized user"));

  const isLegit = await isUser.comparePassword(currentPassword);

  if (!isLegit)
    return next(new ErrorHandler(401, "Enter currect current password"));

  // isUser.password = newPassword

  const hashpassword = await bcrypt.hash(newPassword, 15);
  await AuthModel.findByIdAndUpdate(userId, { password: hashpassword });
  //   await isUser.save();

  res.status(200).json({
    success: true,
    message: "Password changed",
  });
});

export const forgetController = catchAsyncError(async (req, res, next) => {
  const { email } = req.body;
  const isUser = await AuthModel.findOne({ email });

  if (!isUser)
    return next(new ErrorHandler(401, "There is no user with this email"));

  const token = crypto.randomBytes(10).toString("hex");

  const url = process.env.FRONTEND_URI + "/password/reset/" + token;

  const subject = "Reset Password - AUTHENTICATION";

  const body = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      ${url}
    </body>
    </html>`;

  const isSent = await mailSender(email, subject, body);

  if (!isSent) return next(new ErrorHandler(401, "mail send failed"));

  //updating token

  const tokenUpdation = await AuthModel.findByIdAndUpdate(isUser._id, {
    resetToken: token,
  });
  
  if (!tokenUpdation)
    return next(new ErrorHandler(401, "resetToken updatation failed"));

  const tokenExpireUpdation = await AuthModel.findByIdAndUpdate(isUser._id, {
    resetTokenExpire: new Date(Date.now() + 60 * 1000),
  });

  if (!tokenExpireUpdation)
    return next(new ErrorHandler(401, "resetTokenExpire updatation failed"));

  return res.status(200).json({
    success: true,
    message: "Mail send successfully",
  });
});

export const resetController = catchAsyncError(async (req, res, next) => {
  const { newPassword, confirmPassword } = req.body;
  const { token } = req.params;

  const user = await AuthModel.findOne({ resetToken: token });

  if (!user)
    return next(new ErrorHandler(401, "User not found | token not available"));

  if (newPassword !== confirmPassword)
    return next(
      new ErrorHandler(401, "new and confirm password is not matching")
    );

  if (new Date(Date.now()) < user.resetTokenExpire) {
    const hashedConfirmPassword = await bcrypt.hash(confirmPassword, 15);
    const passUpdate = await AuthModel.findByIdAndUpdate(user._id, {
      password: hashedConfirmPassword,
    })

    if (!passUpdate)
      return next(new ErrorHandler(401, "password is not updated"));

    await AuthModel.findByIdAndUpdate(user._id, {resetToken: null, resetTokenExpire: null});

    return res.status(201).json({
      success: true,
      message: "Password changed successfully",
    });
  } else {
    return next(new ErrorHandler(401, "Token Expired"));
  }

});

export const getController = catchAsyncError(async(req, res, next)=>{
  const userId = req.id;

  if(!userId) return next(new ErrorHandler(401, "Unauthorized user"))

  const User = await AuthModel.findById(userId);

  if(!User) return next(new ErrorHandler(401, "User not found"))

  return res.status(200).json({
    success : true,
    message : "User get successfully",
    User
  })

})
