import express from 'express'
import { getAllUsers, signup, signin } from '../controllers/user-controller.js'

const router=express.Router()

router.get("/",getAllUsers)
router.post("/signup",signup)
router.post("/signin",signin)
export default router