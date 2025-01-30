import mongoose from "mongoose";
import authModule from "./auth.model.js";
import billingModel from "./blling_information.model.js";
import Training from "./traning.model.js";

const db={};
db.mongoose=mongoose;
db.auth=authModule;
db.billing=billingModel;
db.training=Training

export default db;