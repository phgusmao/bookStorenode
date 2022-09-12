import express, {Request, Response} from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect('mongodb+srv://pedro:pedro2514q1@cluster0.3rubnls.mongodb.net/?retryWrites=true&w=majority')
.then((data) => {
    console.log('MongoDB connection success')
}).catch((err) => {
    console.log('MongoDB connection failed', err.message)
})

app.listen(3333, () =>{
    console.log('rodando')
})