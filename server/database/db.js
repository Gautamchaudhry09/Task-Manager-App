import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const Username = process.env.DB_Username;
const Password = process.env.DB_Password;

export const Connection = () => {

    const MONGODB_URL = `mongodb+srv://${Username}:${Password}@cluster0.2tw5hy6.mongodb.net/?retryWrites=true&w=majority`

    mongoose.connect(MONGODB_URL);

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database', error.message);
    })


}
