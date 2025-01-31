import mongoose from "mongoose";
import authModule from "./auth.model.js";
import billingModel from "./blling_information.model.js";
import Training from "./traning.model.js";
import contactModel from "./contact.model.js";

const db={};
db.mongoose=mongoose;
db.auth=authModule;
db.billing=billingModel;
db.training=Training;
db.contact=contactModel

export default db;