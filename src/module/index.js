import mongoose from "mongoose";
import authModule from "./auth.model.js";
import billingModel from "./blling_information.model.js";
import Training from "./traning.model.js";
import contactModel from "./contact.model.js";
import coursesModel from "./courses.model.js";
import recordedclassesmodel from "./recorderclassesvideos.model.js";

const db={};
db.mongoose=mongoose;
db.auth=authModule;
db.billing=billingModel;
db.training=Training;
db.contact=contactModel;
db.courses=coursesModel;
db.recordedclassesvideos=recordedclassesmodel

export default db;