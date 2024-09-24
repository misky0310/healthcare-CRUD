import mongoose from "mongoose";

const serviceSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Service name is required"],
    },
    description:{
        type:String,
        required:[true,"Service description is required"],
    },
    price:{
        type:Number,
        required:[true,"Service price is required"],
    }
})

const Services = mongoose.model("services",serviceSchema);
export default Services;