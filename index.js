const express=require("express");
const connection = require("./config/db");
const {bookRouter}=require("./routes/bookRoute")
require('dotenv').config()
const cors=require("cors");
const app=express();

app.use(express.json());
app.use(cors())
app.use("/api",bookRouter)


app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("Data base is connected")
    } catch (error) {
        console.log("Data base is Not connected")
    }
    console.log(`server is running over ${process.env.port}`)
})
