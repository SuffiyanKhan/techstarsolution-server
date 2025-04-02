import mongoose from "mongoose";

const {Schema}=mongoose;

const porfolioSchema=new Schema({
    category:{
        type:String,
        require:true
    },
    thumbnail:{
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
    liveLink:{
        type:String,
        require:true
    },
    parentCategoryId:{
        type:String,
        require:true
    }
},{timestamps:true});

const portfolioModel=mongoose.model("portfolio",porfolioSchema);

export default portfolioModel