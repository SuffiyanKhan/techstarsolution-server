import mongoose from "mongoose";

const {Schema}=mongoose;

const projectCategorySchema=new Schema({
    name:{
        type:String,
        require:true
    },
    titel:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    thumbnail:{
        type:String,
        default:true
    }
},{timestamps:true});

const projectCategoryModule=mongoose.model("projectCategory",projectCategorySchema);

export default projectCategoryModule