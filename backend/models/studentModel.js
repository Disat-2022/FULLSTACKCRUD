import mongoose from "mongoose"

//Define Schema
const studentSchema=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    age:{type:Number},
    date:{type:Date,default:Date.now}
})

//Compile Schema
const studentModel=mongoose.model("crudapitable",studentSchema)

export default studentModel