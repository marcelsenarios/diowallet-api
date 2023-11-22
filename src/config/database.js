import mongoose from "mongoose";
import 'dotenv/config';

export async function connectDb() {


    try {
       await mongoose.connect(process.env.DATABASE_URI);
       console.log("Conectado");
    } catch (error) {
        console.log("ERRO: ", error.message)
    }
}