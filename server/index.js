import cors from 'cors';
import express from 'express';
import  connectDB  from './utils/connectDB.js';
import Services from './models/service.js';
import { configDotenv } from 'dotenv';
configDotenv();

const PORT=process.env.PORT;


const app=express();
app.use(express.json());
app.use(cors());

await connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

app.post('/create', async (req, res) => {

    const {name, description, price}=req.body;

    const newService=new Services({
        name,
        description,
        price
    });
    
    await newService.save();
    return res.status(201).json({message:"Service created successfully"});
})

app.get('/services', async (req,res) => {
    const services= await Services.find();
    return res.json(services);
})

app.get('/service/:id', async (req,res) => {
    const id = req.params.id;
    const foundService = await Services.findById(id);

    if(!foundService)
       return res.status(404).json({message:"Service not found"});
    
    return res.json(foundService);
})

app.put('/update/:id', async (req,res) => {
    const {name, description, price}=req.body;
    const id = req.params.id;
    const foundService = await Services.findById(id);

    if(!foundService)
       return res.status(404).json({message:"Service not found"});
    
    foundService.name=name;
    foundService.description=description;
    foundService.price=price;

    await foundService.save();
    return res.status(200).json({message:"Service updated successfully"});
})

app.delete('/service/:id', async (req,res) => {

    const id = req.params.id;
    const deleteService = await Services.findByIdAndDelete(id);

    if(!deleteService)
       return res.status(404).json({message:"Service not found"});
    
    return res.status(200).json({message:"Service deleted successfully"});
    

})