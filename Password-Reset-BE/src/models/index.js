import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

try {
    mongoose.connect("mongodb+srv://user1:ramyapraba@cluster0.bnxxvoh.mongodb.net/?retryWrites=true&w=majority&appName=password")
    
    console.log("moongoose Connected")
} catch (error) {
    console.log(error)
}

export default mongoose
   