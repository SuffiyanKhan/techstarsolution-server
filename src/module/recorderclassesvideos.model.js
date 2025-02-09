import mongoose from "mongoose";

const {Schema}=mongoose;

const recordedClassesSchema=new Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    videoUrl:{
        type:String,
        require:true
    },
    claasesId:{
        type:String,
        require:true
    }
},{timestamps:true});

const recordedclassesmodel= mongoose.model('recordedclassesvideos',recordedClassesSchema);

export default recordedclassesmodel;