const express=require("express");
const connection = require("./config/db");
require('dotenv').config()
const app=express();


app.get("/",(req,res)=>{
    res.send("This is home page")
})


app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("Data base is connected")
    } catch (error) {
        console.log("Data base is Not connected")
    }
    console.log(`server is running over ${process.env.port}`)
})
