import mongoose from "mongoose";
import authModule from "./auth.model.js";
import billingModel from "./blling_information.model.js";
import Training from "./traning.model.js";
import contactModel from "./contact.model.js";
import coursesModel from "./courses.model.js";
import recordedclassesmodel from "./recorderclassesvideos.model.js";
import accesstopartnersModel from "./accesstopartners.models.js";

const db = {};
db.mongoose = mongoose;
db.auth = authModule;
db.billing = billingModel;
db.training = Training;
db.contact = contactModel;
db.courses = coursesModel;
db.recordedclassesvideos = recordedclassesmodel;
db.accesstopartners = accesstopartnersModel

export default db;