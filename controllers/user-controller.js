import User from "../models/user.js";
import bcrypt from 'bcryptjs'
export const getAllUsers=async(req,res,next)=>{
        let users;
        try {
            users=await User.find()
        } catch (error) {
            console.log(error)
        }
        if(!users){
            return res.status(404).json({message:"Object not found"})
        }
        return res.status(200).json({users})
}

export const signup=async(req,res,next)=>{
const {name, email,password}=req.body
let existingUser;
try {
    existingUser=await User.findOne({email})
} catch (error) {
   return console.log(error)
}
if(existingUser){
    return res.status(400).json({message:"User already exists"})
}
const hashedPassword=bcrypt.hashSync(password)
const user=new User({
    name:name,
    email:email,
    password:hashedPassword
})
try {
   await user.save()
} catch (error) {
   return console.log(error)
}
res.status(201).json({user})
}

export const signin=async(req,res,next)=>{
    const {email,password}=req.body
    let existingUser;
try {
    existingUser=await User.findOne({email})
} catch (error) {
   return console.log(error)
}
if(!existingUser){
    return res.status(404).json({message:"User not found, register first"})
}

const isCorrectPasssword=bcrypt.compareSync(password,existingUser.password)
if(!isCorrectPasssword){
    return res.status(404).json({message:"Invalid Password"})
}
return res.status(200).json({message:"Login Successful!"})
}