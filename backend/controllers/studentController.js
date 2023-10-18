import studentModel from "../models/studentModel.js"
// import bcrypt from "bcrypt"

class StudentController{
    static getAllDoc=async(req,res)=>{
       const studentdata=await studentModel.find({})
       return(res.json(studentdata))
    }

    //Data Created
    static createDoc=async(req,res)=>{
        const {name,email,password,age}=req.body
        // const hashpassword= await bcrypt.hash(password,5)
        const doc=new studentModel({
            name:name,
            email:email,
            password:password,
            age:age
        })
        const userdata=await doc.save()
        return(res.json(userdata))
     }

     //Single User Data
     static singleDoc=async(req,res)=>{
        const {id}=req.params
        const signledata=await studentModel.findById(id)
        return(res.json(signledata))
     }

     //UpdateUser
     static updateDoc=async(req,res)=>{
        const {id}=req.params
        const updatedata=await studentModel.findByIdAndUpdate(id,req.body)
        return(res.json(updatedata))
    }

    //Delete User
    static deleteDoc=async(req,res)=>{
        const {id}=req.params
        const deleteuser=await studentModel.findByIdAndDelete(id)
        return(res.json(deleteuser))
    }
}
export default StudentController