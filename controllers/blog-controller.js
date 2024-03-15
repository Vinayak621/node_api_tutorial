import Blog from "../models/blog.js";

export const getAllBlogs=async(req,res,next)=>{
    let blogs;
    try {
        blogs=await Blog.find()
    } catch (error) {
        return console.log(error)
    }
    if(!blogs){
        return res.status(400).json({message:"Blogs are not  found"})
    }
    return res.status(200).json({blogs})
}

export const addBlog=async(req,res,next)=>{
    const {title,description,image,user}=req.body
    const blog=new Blog({
        title:title,
        description:description,
        image:image,
        user:user
    })
    try {
        await blog.save()
    } catch (error) {
        return console.log(error)
    }
    return res.status(201).json({blog})

}