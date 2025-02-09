import mongoose from "mongoose";

const {Schema}=mongoose;

const coursesSchema=new Schema({
    name:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    thumbnail:{
        type:String,
        require:true
    }
},{timestamps:true});

const coursesModel= mongoose.model("courses",coursesSchema);

export default coursesModel;