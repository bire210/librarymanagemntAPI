const express=require("express");
const bookModel=require("../models/bookModel")
const bookRouter=express.Router();


bookRouter.post("/Create",async(req,res)=>{
try {
    const newBook=new bookModel(req.body);
    const savedBook=await newBook.save();
    const book=savedBook["_doc"]
    res.status(200).json({"message":"Book has been Created",book})
} catch (error) {
    res.status(501).json(error.message)
}
})

bookRouter.get("/Retrieve/:id",async(req,res)=>{
    try {
        const getBook=await bookModel.findById({"_id":req.params.id})
       if(getBook){
        res.status(200).json(getBook)
       }else{
        res.status(200).json("This Book is Not  Available")
       }
      
    } catch (error) {
        res.status(500).json(error.message)
    }
})
bookRouter.get("/Retrieve",async(req,res)=>{
    try {
        const getAllBook=await bookModel.find();
         if(getAllBook.length==0){
            res.status(200).json("No book Available")
         }else{
            res.status(200).json(getAllBook)
         }
       
    } catch (error) {
        res.status(500).json(error.message)
    }
})


bookRouter.delete("/Delete/:id",async(req,res)=>{
    try {
        const delted=await bookModel.findByIdAndDelete({"_id":req.params.id})
        if(delted){
            res.status(200).json("Book has been Deleted")
        }else{
            res.status(200).json("This Book is Not  Available")
        }

       
    } catch (error) {
        res.status(500).json(error.message)
    }
})

bookRouter.put("/Update/:id",async(req,res)=>{
    try {
        const updatedBook=await bookModel.findByIdAndUpdate(req.params.id,{...req.body})
        if(updatedBook){
            
            res.status(200).json({"message":"Book has been Updated"})
        }else{
            res.status(200).json("Book does not Exist")
        }
       
    } catch (error) {
        res.status(500).json(error.message)
    }
})

module.exports={bookRouter}