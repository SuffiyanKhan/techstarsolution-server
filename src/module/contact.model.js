import mongoose from "mongoose";

const {Schema}=mongoose;

const contactSchema=new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    subject:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    companyname:{
        type:String,
        require:true
    }
},{timestamps:true});

const contactModel = mongoose.model("contact",contactSchema);

export default contactModel;