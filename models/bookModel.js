const mongoose=require("mongoose");

const bookScehma=new mongoose.Schema({
name:{type:String,required:true},
authorName:{type:String,required:true},
description:{type:String,required:true}

})

const bookModel=mongoose.model("books",bookScehma);

module.exports=bookModel