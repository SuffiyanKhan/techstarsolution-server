import mongoose from "mongoose";

const { Schema } = mongoose;

const trainingSchema = new Schema({
  name: {
    type: String,
    required: true,  
  },
  email: {
    type: String,
    required: true,  
    match: [/\S+@\S+\.\S+/, 'Please provide a valid email address'],  
  },
  address: {
    type: String,
    required: true,  
  },
  country: {
    type: String,
    required: true,  
  },
  city: {
    type: String,
    required: true,  
  },
  zip: {
    type: String,
    required: true, 
  },
  phone: {
    type: String,
    required: true 
  },
  trainingName:{
    type: String,
    // required: true 
  },
  price:{
    type: String,
    required: true 
  },
  payment:{
    type: Boolean,
    default:false
  }
},{timestamps:true});

const Training = mongoose.model('training', trainingSchema);

export default Training;
