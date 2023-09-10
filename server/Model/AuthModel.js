import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const authSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: [true, "Enter the name"],
  },

  email: {
    type: String,
    required: [true, "Enter the mail id"],
    unique: [true, "Mail must be unique"],
    validate: [validator.isEmail, "Wrong email format"],
  },

  password: {
    type: String,
    required: [true, "Enter the password"],
    select: false,
    minLength: [4, "Enter more than 4 character in password field"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  resetToken: {
    type: String,
    default: null,
  },

  resetTokenExpire: {
    type: Date,
    default: null,
  },
});

authSchema.method("comparePassword", async function (password) {
  return await bcrypt.compare(password, this.password);
});

authSchema.method("genToken", function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "5d",
  });
});

authSchema.pre("save", async function (next) {
  if (this.isModified("password"))
    this.password = await bcrypt.hash(this.password, 15);
  else next();
});

const AuthModel = mongoose.model("authenticated users", authSchema);
export default AuthModel