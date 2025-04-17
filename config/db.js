import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://yathinbommineni:yathin102@cluster0.6vvv6.mongodb.net/food-del').then(()=>console.log("DataBase Connected"));
}