import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const userModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    refreshtoken: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

userModel.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
  });
  
  // Check password correctness
  userModel.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  
  // Generate JWT tokens
  userModel.methods.generateAccessToken = function () {
    return jwt.sign(
      {
        _id: this._id,
        email: this.email,
        username: this.username,
        fullname: this.fullname,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );
  };
  userModel.methods.generateRefreshToken = function () {
    return jwt.sign(
      { _id: this._id },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    );
  };

  export const User = mongoose.model('User', userModel);
