import mongoose from "mongoose";

const {Schema}= mongoose;

const accesstoartnersSchema=new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
        role:{
            type:String,
            require:true
        }
},{timestamps:true});

const accesstopartnersModel=mongoose.model('accesstopartners',accesstoartnersSchema);


export default accesstopartnersModel