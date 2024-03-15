import  express from 'express'
import { getAllBlogs, addBlog } from '../controllers/blog-controller.js'
const router1=express.Router()

router1.get("/",getAllBlogs)
router1.post("/addblog",addBlog)
export default router1