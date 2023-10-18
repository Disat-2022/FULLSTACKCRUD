import express from "express"
import StudentController from "../controllers/studentController.js"

const router=express.Router()

router.get("/student",StudentController.getAllDoc)
router.post("/student",StudentController.createDoc)
router.get("/student/:id",StudentController.singleDoc)
router.put("/student/updateuser/:id",StudentController.updateDoc)
router.delete("/student/:id",StudentController.deleteDoc)

export default router