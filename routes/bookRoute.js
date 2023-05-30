const express=require("express");
const bookModel=require("../models/bookModel")
const bookRouter=express.Router();


bookRouter.post("/Create",async(req,res)=>{
try {
    const newBook=new bookModel(req.body);
    const savedBook=await newBook.save();
    res.status(200).json(savedBook)
} catch (error) {
    res.status(501).json(error.message)
}
})

bookRouter.get("/Retrieve/:id",async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})
bookRouter.get("/Retrieve",async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})


bookRouter.delete("/Delete",async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})

bookRouter.put("/Update/:id",async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})

module.exports={bookRouter}