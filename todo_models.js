
import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
 // username:String,
 // email:String,
 // isActive:Boolean,
 // following syntax is modern way to write the schema object
 usename:{
  type:String,
  required:true,
  unique:true, //in which instgram unique user id 
 },
 password:{
  type:String,
  required:true,
  unique:true, 
 }
});
export const User=mongoose.model("User",userSchema)
