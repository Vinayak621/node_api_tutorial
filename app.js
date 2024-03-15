//password:4NeGxmBOWqJ45QM6 for mongodb
import express from 'express'
import  mongoose  from 'mongoose'
import router from './routes/user-routes.js'
import router1 from './routes/blog-routes.js'
const app=express()
const PORT=5000
app.use(express.json())
app.use("/api/user",router)
app.use("/api/blog",router1)

mongoose.connect('mongodb+srv://vinayakabv35:4NeGxmBOWqJ45QM6@cluster0.j0geth4.mongodb.net/?retryWrites=true&w=majority')
.then(()=>app.listen(PORT)).then(()=>console.log("Connection Successfull"))
.catch((err)=>console.log("Error is:"+err))


