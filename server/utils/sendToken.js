export const sendToken = (user, statusCode, message, res) => {
  const token = user.genToken();

  const tokenOptions = {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true,
    sameSite: 'none'
  };

  res.status(Number(statusCode)).cookie("token", token, tokenOptions).json({
    success: true,
    message,
  });
};
