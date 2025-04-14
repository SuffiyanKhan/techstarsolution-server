import mongoose from "mongoose";

const{Schema}=mongoose;

const ourprojectsSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
},{timestamps:true});

const ourprojectsModel=mongoose.model("ourprojects",ourprojectsSchema);

export default ourprojectsModel;