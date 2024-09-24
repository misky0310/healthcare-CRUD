import cors from 'cors';
import express from 'express';
import  connectDB  from './utils/connectDB.js';
import Services from './models/service.js';

const app=express();
app.use(express.json());
app.use(cors());

await connectDB();

app.listen(5001, () => {
    console.log('Server is running on port 5001');
})

app.post('/create', async (req, res) => {

    const {name, description, price}=req.body;

    const newService=new Services({
        name,
        description,
        price
    });
    
    await newService.save();
})

