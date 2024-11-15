
import express from "express"

import cookieParser from "cookie-parser"

const app = express();



app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())


// routes

import userRouter from "./src/Routes/route.js"

// routes declaration
app.use("/users", userRouter)

export { app }