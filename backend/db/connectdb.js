import mongoose from "mongoose";

//Database connection
const CONNECTDB=async(DATABASE_URL)=>{
    try {
        const DB_OPTION={
            dbName:process.env.DBNAME
        }       
        await mongoose.connect(DATABASE_URL,DB_OPTION)
        console.log("connected")
    } catch (error) {
        console.log(error)
    }
}
export default CONNECTDB