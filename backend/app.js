import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import CONNECTDB from "./db/connectdb.js"
import web from "./routes/web.js"

const app=express()
app.use(cors())
app.use(express.json())
const port=process.env.PORT
const DATABASE_URL=process.env.DATABASE_URL

//Databse connection
CONNECTDB(DATABASE_URL)

//Load routes
app.use("/",web)

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})

