import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../Model/userModel.js";

const generateAccessAndRefreshToken = async (userId) => {
    try {
      const user = await User.findById(userId);
  
      if (!user) {
        throw new Error("User not found");
      }
  
      // Generate access and refresh tokens using schema methods
      const accessToken = user.generateAccessToken();
      const refreshToken = user.generateRefreshToken();
  
      // Save the refresh token to the user document
      user.refreshtoken = refreshToken;
      await user.save({ validateBeforeSave: false });
  
      return { accessToken, refreshToken };
    } catch (error) {
      throw new Error(error.message || "Unable to generate access and refresh token");
    }
  };
  

 const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }


    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    const newUser = new User({
      name,
      email,
      password
    });

    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message || "Server error" });
  }
};

// Login Controller
 const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) {
       throw new ApiError(401, "Incorrect password");
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);
 
    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")
 

    const options = {
       httpOnly: true,
       secure: true, 
    };

    res.status(200).json({
      message: "Login successful",
      accessToken,
      refreshToken,
      user:loggedInUser
    });
  } catch (error) {
    res.status(500).json({ message: error.message || "Server error" });
  }
};

export {login,register}