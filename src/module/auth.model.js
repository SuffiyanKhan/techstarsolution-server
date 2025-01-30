import mongoose from "mongoose";

const {Schema} = mongoose;

const authSchema= new Schema({
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
    }
},{timestamps:true});

const authModule= mongoose.model('auth',authSchema);

export default authModule;